import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient

const prismaMiddleware = (req, res, next) => {
    req.prisma = prisma; 
    next();
  };

export default prismaMiddleware