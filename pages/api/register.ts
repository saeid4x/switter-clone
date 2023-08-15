import { NextApiRequest,NextApiResponse } from "next";
import bcrypt from 'bcrypt';
import prisma from '@/libs/prismadb';

export default async function handler(req:NextApiRequest , res:NextApiResponse){
    if(req.method !== 'POST'){
        /*
            The 405 error happens when a client attempts to use an HTTP method 
            that is not allowed by the server. For example, this issue can occur 
            when a user tries to use a method such as PUT or DELETE on a resource 
            that only allows GET or POST requests.

        */
        return res.status(405).end();
    }

    try{
        const {email,username,name, password} = req.body;
        const hashedPassword = await bcrypt.hash(password,12);
        const user = await prisma.user.create({
            data:{
                email,username,name,hashedPassword
            }
        });

        return res.status(200).json(user)
    }catch(error){
        console.log(error);
        return res.status(400).end();
    }
}