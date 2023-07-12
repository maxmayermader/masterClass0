import { CognitoUser } from '@aws-amplify/auth';
import { Amplify, Auth } from 'aws-amplify';
import { CognitoIdentityClient } from '@aws-sdk/client-cognito-identity';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-providers'

const awsRegion = 'eu-central-1'

Amplify.configure({
    Auth: {
        region: awsRegion,
        userPoolId: 'eu-central-1_tUrrRW9oJ',
        userPoolWebClientId: '7o9ki3oujlsdl3a1mq6anapj3u',
        identityPoolId: 'eu-central-1:a9accd0f-a63c-4d32-8e2b-7a6331ee4ce2',
        authenticationFlowType: 'USER_PASSWORD_AUTH'       
    }
});



export class AuthService {


    public async login(userName: string, password: string) {
        const result = await Auth.signIn(userName, password) as CognitoUser;
        return result;
    }

    public async generateTemporaryCredentials(user: CognitoUser){
        const jwtToken = user.getSignInUserSession().getIdToken().getJwtToken();
        const cognitoIdentityPool = `cognito-idp.${awsRegion}.amazonaws.com/eu-central-1_tUrrRW9oJ`;
        const cognitoIdentity = new CognitoIdentityClient({
            credentials: fromCognitoIdentityPool({
                identityPoolId: 'eu-central-1:a9accd0f-a63c-4d32-8e2b-7a6331ee4ce2',
                logins: {
                    [cognitoIdentityPool]: jwtToken
                }
            })
        });
        const credentials = await cognitoIdentity.config.credentials();
        return credentials;
    }
}