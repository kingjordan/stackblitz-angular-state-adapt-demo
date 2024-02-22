import { createAdapter, joinAdapters } from "@state-adapt/core";

interface CookieState {
    price: number;
    flavor: 'Chocolate Chip' | 'Oatmeal Raisin';
  }
  
  const cookieAdapter = joinAdapters<CookieState>()({
    price: createAdapter<number>()({
      selectors: {
        discounted: state => state * 0.9,
      },
    }),
    flavor: createAdapter<'Chocolate Chip' | 'Oatmeal Raisin'>()({
      setToChocolateChip: () => 'Chocolate Chip',
      setToOatmealRaisin: () => 'Oatmeal Raisin',
    }),
  })();
  
  interface CookiesState {
    favorite: CookieState;
    leastFavorite: CookieState;
  }
  const initialCookiesState: CookiesState = {
    favorite: {
      price: 200,
      flavor: 'Chocolate Chip',
    },
    leastFavorite: {
      price: 190,
      flavor: 'Oatmeal Raisin',
    },
  };
  
  const cookiesAdapter = joinAdapters<CookiesState>()({
    favorite: cookieAdapter,
    leastFavorite: cookieAdapter,
  })({
    totalPrice: s => s.favorite.price + s.leastFavorite.price,
  })({
    totalPriceDiscounted: s => s.totalPrice * 0.9,
  })();
  
  // Usage https://state-adapt.github.io/docs/core#joinadapters
//   cookiesAdapter.setFavoriteToOatmealRaisin(initialCookiesState);
// cookiesAdapter.setLeastFavoriteToOatmealRaisin(initialCookiesState);
  cookiesAdapter.setFavoriteFlavor(initialCookiesState,'Chocolate Chip',initialCookiesState);
  cookiesAdapter.setLeastFavoriteFlavor(initialCookiesState,'Oatmeal Raisin',initialCookiesState);
  const favoritePriceDiscounted =
    cookiesAdapter.selectors.favoritePriceDiscounted(initialCookiesState);
  const totalPrice = cookiesAdapter.selectors.totalPrice(initialCookiesState);
  const totalPriceDiscounted =
    cookiesAdapter.selectors.totalPriceDiscounted(initialCookiesState);