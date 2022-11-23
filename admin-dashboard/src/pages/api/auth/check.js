const bcrypt = require("bcrypt");

async function main(email, clearPassword) {
    let valid = false;
    let user = await prisma.user.findUnique({
        where: {
                email: {
                        equals: email
                    },
  
        }
    })

    if(user){
        valid = await bcrypt.compare(clearPassword, user.password);  
    }

    user = valid ? user : null;

    return user;

}

export default async function checkUser(credentials){
    const user = await main(credentials.username, credentials.password);
    await prisma.$disconnect()
    return user;

}