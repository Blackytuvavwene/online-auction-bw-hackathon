"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getLocalizedSortProperty_1 = require("./getLocalizedSortProperty");
const config = {
    localization: {
        locales: ['en', 'es'],
    },
};
describe('get localized sort property', () => {
    it('passes through a non-localized sort property', () => {
        const result = (0, getLocalizedSortProperty_1.getLocalizedSortProperty)({
            segments: ['title'],
            config,
            fields: [
                {
                    name: 'title',
                    type: 'text',
                },
            ],
            locale: 'en',
        });
        expect(result).toStrictEqual('title');
    });
    it('properly localizes an un-localized sort property', () => {
        const result = (0, getLocalizedSortProperty_1.getLocalizedSortProperty)({
            segments: ['title'],
            config,
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    localized: true,
                },
            ],
            locale: 'en',
        });
        expect(result).toStrictEqual('title.en');
    });
    it('keeps specifically asked-for localized sort properties', () => {
        const result = (0, getLocalizedSortProperty_1.getLocalizedSortProperty)({
            segments: ['title', 'es'],
            config,
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    localized: true,
                },
            ],
            locale: 'en',
        });
        expect(result).toStrictEqual('title.es');
    });
    it('properly localizes nested sort properties', () => {
        const result = (0, getLocalizedSortProperty_1.getLocalizedSortProperty)({
            segments: ['group', 'title'],
            config,
            fields: [
                {
                    name: 'group',
                    type: 'group',
                    fields: [
                        {
                            name: 'title',
                            type: 'text',
                            localized: true,
                        },
                    ],
                },
            ],
            locale: 'en',
        });
        expect(result).toStrictEqual('group.title.en');
    });
    it('keeps requested locale with nested sort properties', () => {
        const result = (0, getLocalizedSortProperty_1.getLocalizedSortProperty)({
            segments: ['group', 'title', 'es'],
            config,
            fields: [
                {
                    name: 'group',
                    type: 'group',
                    fields: [
                        {
                            name: 'title',
                            type: 'text',
                            localized: true,
                        },
                    ],
                },
            ],
            locale: 'en',
        });
        expect(result).toStrictEqual('group.title.es');
    });
    it('properly localizes field within row', () => {
        const result = (0, getLocalizedSortProperty_1.getLocalizedSortProperty)({
            segments: ['title'],
            config,
            fields: [
                {
                    type: 'row',
                    fields: [
                        {
                            name: 'title',
                            type: 'text',
                            localized: true,
                        },
                    ],
                },
            ],
            locale: 'en',
        });
        expect(result).toStrictEqual('title.en');
    });
    it('properly localizes field within named tab', () => {
        const result = (0, getLocalizedSortProperty_1.getLocalizedSortProperty)({
            segments: ['tab', 'title'],
            config,
            fields: [
                {
                    type: 'tabs',
                    tabs: [
                        {
                            name: 'tab',
                            fields: [
                                {
                                    name: 'title',
                                    type: 'text',
                                    localized: true,
                                },
                            ],
                        },
                    ],
                },
            ],
            locale: 'en',
        });
        expect(result).toStrictEqual('tab.title.en');
    });
    it('properly localizes field within unnamed tab', () => {
        const result = (0, getLocalizedSortProperty_1.getLocalizedSortProperty)({
            segments: ['title'],
            config,
            fields: [
                {
                    type: 'tabs',
                    tabs: [
                        {
                            label: 'Tab',
                            fields: [
                                {
                                    name: 'title',
                                    type: 'text',
                                    localized: true,
                                },
                            ],
                        },
                    ],
                },
            ],
            locale: 'en',
        });
        expect(result).toStrictEqual('title.en');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0TG9jYWxpemVkU29ydFByb3BlcnR5LnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9uZ29vc2UvZ2V0TG9jYWxpemVkU29ydFByb3BlcnR5LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSx5RUFBc0U7QUFFdEUsTUFBTSxNQUFNLEdBQUc7SUFDYixZQUFZLEVBQUU7UUFDWixPQUFPLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO0tBQ3RCO0NBQ1EsQ0FBQztBQUVaLFFBQVEsQ0FBQyw2QkFBNkIsRUFBRSxHQUFHLEVBQUU7SUFDM0MsRUFBRSxDQUFDLDhDQUE4QyxFQUFFLEdBQUcsRUFBRTtRQUN0RCxNQUFNLE1BQU0sR0FBRyxJQUFBLG1EQUF3QixFQUFDO1lBQ3RDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQztZQUNuQixNQUFNO1lBQ04sTUFBTSxFQUFFO2dCQUNOO29CQUNFLElBQUksRUFBRSxPQUFPO29CQUNiLElBQUksRUFBRSxNQUFNO2lCQUNiO2FBQ0Y7WUFDRCxNQUFNLEVBQUUsSUFBSTtTQUNiLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsa0RBQWtELEVBQUUsR0FBRyxFQUFFO1FBQzFELE1BQU0sTUFBTSxHQUFHLElBQUEsbURBQXdCLEVBQUM7WUFDdEMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ25CLE1BQU07WUFDTixNQUFNLEVBQUU7Z0JBQ047b0JBQ0UsSUFBSSxFQUFFLE9BQU87b0JBQ2IsSUFBSSxFQUFFLE1BQU07b0JBQ1osU0FBUyxFQUFFLElBQUk7aUJBQ2hCO2FBQ0Y7WUFDRCxNQUFNLEVBQUUsSUFBSTtTQUNiLENBQUMsQ0FBQztRQUVILE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxhQUFhLENBQUMsVUFBVSxD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