module.exports = {
    presets: [
        require.resolve('@babel/preset-typescript'),
        [
            require.resolve('@babel/preset-env'),
            {
                targets: [
                    'defaults',
                    'not IE 11',
                    'not IE_Mob 11',
                ],
            },
        ],
        require.resolve('@babel/preset-react'),
    ],
    plugins: [
        require.resolve('@babel/plugin-transform-runtime'),
        require.resolve('@babel/plugin-proposal-class-properties'),
        require.resolve('@babel/plugin-proposal-nullish-coalescing-operator'),
    ],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFiZWwuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2JhYmVsLmNvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsT0FBTyxHQUFHO0lBQ2YsT0FBTyxFQUFFO1FBQ1AsT0FBTyxDQUFDLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQztRQUMzQztZQUNFLE9BQU8sQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUM7WUFDcEM7Z0JBQ0UsT0FBTyxFQUFFO29CQUNQLFVBQVU7b0JBQ1YsV0FBVztvQkFDWCxlQUFlO2lCQUNoQjthQUNGO1NBQ0Y7UUFDRCxPQUFPLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDO0tBQ3ZDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsT0FBTyxDQUFDLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQztRQUNsRCxPQUFPLENBQUMsT0FBTyxDQUFDLHlDQUF5QyxDQUFDO1FBQzFELE9BQU8sQ0FBQyxPQUFPLENBQUMsb0RBQW9ELENBQUM7S0FDdEU7Q0FDRixDQUFDIn0=