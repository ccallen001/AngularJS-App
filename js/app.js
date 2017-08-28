(() => {
    const store = angular.module('Store', []);

    store.controller('StoreController', [
        '$scope', $scope => {

            $scope.products = [
                {
                    name: 'Dodecahedron',
                    images: {
                        full: 'http://mathworld.wolfram.com/images/eps-gif/Dodecahedron2Compound_700.gif',
                        thumb: ''
                    },
                    price: 1.95,
                    description: 'A msyterious wonder...',
                    soldOut: false,
                    canPurchase: true,
                },
                {
                    name: 'Rock',
                    images: {
                        full: 'http://pa1.narvii.com/5775/32bd76c9b1404a5345d3209221b27d022b05b42b_128.gif',
                        thumb: ''
                    },
                    price: 10.99,
                    description: 'An average rock.',
                    soldOut: false,
                    canPurchase: true,
                },
                {
                    name: 'Ruby',
                    images: {
                        full: 'http://icons.iconarchive.com/icons/aha-soft/jewelry/256/Gem-icon.png',
                        thumb: ''
                    },
                    price: 5.99,
                    description: 'A great gem to own!',
                    soldOut: false,
                    canPurchase: false,
                },
                {
                    name: 'Snake Eye',
                    images: {
                        full: 'http://icons.iconarchive.com/icons/pauloruberto/custom-round-yosemite/256/Python-icon.png',
                        thumb: ''
                    },
                    price: 100,
                    description: 'A preciousssssssss stone.',
                    soldOut: false,
                    canPurchase: true,
                },
            ]
        }
    ]);

    store.controller('PanelController', [
        '$scope', $scope => {

        }
    ]);
})();