import { AuthService } from "./AuthService";


async function testAuth(){
    const service = new AuthService();
    const loginResult = await service.login(
        'max1',
        'Max12345$'
    )
    console.log(loginResult.getSignInUserSession().getIdToken().getJwtToken());}

testAuth();
