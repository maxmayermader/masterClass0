import { CognitoUser } from '@aws-amplify/auth';
import { Amplify, Auth } from 'aws-amplify';

const awsRegion = 'eu-central-1'

Amplify.configure({
    Auth: {
        region: awsRegion,
        userPoolId: 'eu-central-1_tUrrRW9oJ',
        userPoolWebClientId: '7o9ki3oujlsdl3a1mq6anapj3u',
        authenticationFlowType: 'USER_PASSWORD_AUTH'
    }
});



export class AuthService {


    public async login(userName: string, password: string) {
        const result = await Auth.signIn(userName, password) as CognitoUser;
        return result;
    }
}