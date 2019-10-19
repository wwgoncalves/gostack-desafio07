import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export const { format: formatPrice } = new Intl.NumberFormat(undefined, {
  style: 'currency',
  currency: 'BRL',
});
