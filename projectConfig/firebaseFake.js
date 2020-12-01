export default {
    initializeApp: () => {},
    database: () => ({
        ref: () => ({
            child: () => ({
                child: () => ({
                    on: () => {},
                    push: () => {},
                }),
            }),
        }),
    }),
};
