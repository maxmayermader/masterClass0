//import { json } from "stream/consumers";

import { handler } from "../src/services/spaces/handler";


handler({
    httpMethod: 'GET',
    queryStringParameters: {
        id: '260077ce-d319-4f60-99f6-9ac9211f62b0'
    }
    // body: JSON.stringify({
    //     location: 'Dublin'
    // })
} as any, {} as any);