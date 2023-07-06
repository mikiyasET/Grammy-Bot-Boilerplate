import {prisma} from "../utils/prisma";
import {users, Prisma, userStatus} from "@prisma/client";

export const createUser = async (data: Prisma.usersUncheckedCreateInput): Promise<users> => {
    return prisma.users.create({
        data: data
    })
}
export const updateUser = async (id: string, data: Prisma.usersUncheckedUpdateInput): Promise<users> => {
    return prisma.users.update({
        where: {
            id: id
        },
        data: data
    })
}
export const removeUser = async (id: string): Promise<users> => {
    return prisma.users.delete({
        where: {
            id: id
        }
    })
}
export const getUser = async (id: string): Promise<users | null> => {
    return prisma.users.findUnique({
        where: {
            id: id
        }
    });
}
export const getUsers = async (): Promise<users[]> => {
    return await prisma.users.findMany();
}
export const getUserByTID = async (tid: string): Promise<users | null> => {
    return prisma.users.findUnique({
        where: {
            tg_id: tid
        }
    })
}

export const suspendUser = async (id: string) => {
    return prisma.users.update({
        where: {
            id: id
        },
        data: {
            status: userStatus.suspended
        }
    })
}
export const activateUser = async (id: string) => {
    return prisma.users.update({
        where: {
            id: id
        },
        data: {
            status: userStatus.active
        }
    })
}
export const deactivateUser = async (id: string) => {
    return prisma.users.update({
        where: {
            id: id
        },
        data: {
            status: userStatus.deactivated
        }
    })
}