import { handler } from "../src/services/spaces/handler";
process.env.AWS_REGION = "eu-central-1";
process.env.TABLE_NAME = 'SpaceTable-02ac06a23a16'

handler({
    httpMethod: 'POST',
    body: JSON.stringify({
        location: 'Dublin updated'
    })
} as any, {} as any).then(result =>{
    console.log(result)
});