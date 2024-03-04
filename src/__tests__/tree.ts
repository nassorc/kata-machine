export const tree: BinaryNode<number> = {
    value: 20,
    right: {
        value: 50,
        right: {
            value: 100,
            right: null,
            left: null,
        },
        left: {
            value: 30,
            right: {
                value: 45,
                right: null,
                left: null,
            },
            left: {
                value: 29,
                right: null,
                left: null,
            }
        },
    },
    left: {
        value: 10,
        right: {
            value: 15,
            right: null,
            left: null,
        },
        left: {
            value: 5,
            right: {
                value: 7,
                right: null,
                left: null,
            },
            left: null,
        }
    }
};

export const tree2: BinaryNode<number> = {
    value: 20,
    right: {
        value: 50,
        right: null,
        left: {
            value: 30,
            right: {
                value: 45,
                right: {
                    value: 49,
                    left: null,
                    right: null,
                },
                left: null,
            },
            left: {
                value: 29,
                right: null,
                left: {
                    value: 21,
                    right: null,
                    left: null,
                },
            }
        },
    },
    left: {
        value: 10,
        right: {
            value: 15,
            right: null,
            left: null,
        },
        left: {
            value: 5,
            right: {
                value: 7,
                right: null,
                left: null,
            },
            left: null,
        }
    }
};

export const bst = {
    value: 20,
    left: {
        value: 10,
        left: { value: 5, left: null, right: null },
        right: {
            value: 15,
            left: { value: 11, left: null, right: null },
            right: null
        }
    },
    right: {
        value: 100,
        left: { value: 35, left: null, right: null },
        right: { value: 101, left: null, right: null }
    }
}

export const bst2 = {
    value: 20,
    left: {
        value: 10,
        left: { value: 5, left: null, right: null },
        right: {
            value: 15,
            left: { value: 11, left: null, right: null },
            right: null
        }
    },
    right: {
        value: 100,
        left: { value: 36, left: null, right: null },
        right: { value: 101, left: null, right: null }
    }
}