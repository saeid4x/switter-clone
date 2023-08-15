import serverAuth from "@/libs/serverAuth";
import { NextApiRequest,NextApiResponse } from "next"

export default async function  handler(
    req:NextApiRequest,
    res:NextApiResponse
){
    if(req.method !== 'GET'){
          /*
            The 405 error happens when a client attempts to use an HTTP method 
            that is not allowed by the server. For example, this issue can occur 
            when a user tries to use a method such as PUT or DELETE on a resource 
            that only allows GET or POST requests.

        */
        return res.status(405).end();
    }

    try{
        const {currentUser} = await serverAuth(req,res);
        return res.status(200).json(currentUser);
         
    }catch(error){
        console.log(error);
        /*
        The HTTP status 400:
           bad request indicates that the request sent 
           to the server is invalid or corrupted.

        */
        return res.status(400).end();

    }

}