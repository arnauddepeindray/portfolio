const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main(email, hashPassword) {
    const user = await prisma.user.findUnique({
        where: {
            AND: [
                {
                    email: {
                        equals: email
                    },
                },
                {
                    password: {
                        equals: hashPassword
                    }
                }
            ]
            
        }
    })

    return user;

}

export default function handler(req, res){
    console.log(req, res);
    


}