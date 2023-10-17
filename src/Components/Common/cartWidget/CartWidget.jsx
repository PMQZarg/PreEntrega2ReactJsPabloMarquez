import { Badge } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const CartWidget = () => {
  return (
    <div>
        <Badge badgeContent={0} showZero color="secondary">
      
      <ShoppingCartCheckoutIcon color= "inherit" />
    </Badge>
      </div>
  );
};

export default CartWidget;