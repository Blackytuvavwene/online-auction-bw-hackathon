import { faker } from '@faker-js/faker';
import { FakeItemModel } from '~/demo/fake.types';
import Admin from '~/types/admin.type';
import { User } from '~/types/user.type';


export function createFakeUser(): User {
    return {
        id: faker.datatype.number(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        role: faker.helpers.arrayElement(['user', 'admin', 'auctioner'])
    }
}


export function createFakeUsers(count: number): User[] {
    return Array.from({ length: count }, createFakeUser);
}

export function createFakeAdmin(): Admin {
    return {
        id: faker.datatype.number(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        role: 'admin'
    }
}


export function createFakeAdmins(count: number): Admin[] {
    return Array.from({ length: count }, createFakeAdmin);
}


export function createFakeAuctioner(): User {
    return {
        id: faker.datatype.number(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        role: 'auctioner'
    }
}

export function createFakeAuctioners(count: number): User[] {
    return Array.from({ length: count }, createFakeAuctioner);
}

function fakeImage(): string {
    return faker.image.imageUrl();
}

function fakeImages(count: number): string[] {
    return Array.from({ length: count }, fakeImage);
}

export function createFakeItem(): FakeItemModel {
    return {
        id: faker.datatype.number(),
        name: faker.commerce.productName(),
        price: faker.datatype.number(),
        description: faker.commerce.productDescription(),
        image: fakeImages(6),
        category: faker.commerce.department(),
        quantity: faker.datatype.number(),
        seller: faker.name.fullName(),
        sellerId: faker.datatype.number(),
        sellerRating: faker.datatype.number(),
        status: faker.helpers.arrayElement(['active', 'inactive']),
        createdAt: faker.date.past().toISOString(),
        updatedAt: faker.date.recent().toISOString()
    }
}

export function createFakeItems(count: number): FakeItemModel[] {
    return Array.from({ length: count }, createFakeItem);
}