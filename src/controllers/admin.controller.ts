import {prisma} from "../utils/prisma";
import {admin, Prisma} from "@prisma/client";

export const createAdmin = async (data: Prisma.adminUncheckedCreateInput): Promise<admin> => {
    return prisma.admin.create({
        data: data
    })
}
export const updateAdmin = async (id: string, data: Prisma.adminUncheckedUpdateInput): Promise<admin> => {
    return prisma.admin.update({
        where: {
            id: id
        },
        data: data
    })
}
export const removeAdmin = async (id: string): Promise<admin> => {
    return prisma.admin.delete({
        where: {
            id: id
        }
    })
}
export const getAdmin = async (id: string): Promise<admin | null> => {
    return prisma.admin.findUnique({
        where: {
            id: id
        }
    });
}
export const getAdmins = async (): Promise<admin[]> => {
    return await prisma.admin.findMany();
}

export const checkAdmin = async (id: string): Promise<boolean> => {
    return !!(await prisma.admin.findUnique({
        where: {
            id: id
        }
    }));
}
export const checkAdminUsername = async (username: string): Promise<boolean> => {
    return !!(await prisma.admin.findUnique({
        where: {
            username: username
        }
    }));
}
export const checkAdminName = async (name: string): Promise<boolean> => {
    return !!(await prisma.admin.findUnique({
        where: {
            name: name
        }
    }));
}
export const getAdminUser = async (user_id: string): Promise<admin | null> => {
    return prisma.admin.findUnique({
        where: {
            user_id: user_id,
        },
        include: {
            user: true,
        }
    });
}