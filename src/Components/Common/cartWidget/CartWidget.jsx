import { Badge } from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  return (
    <Link to={"CartPresentacional"}>
        <Badge badgeContent={0} showZero color="secondary">
      
      <ShoppingCartCheckoutIcon color= "inherit" />
    </Badge>
      </Link>
  );
};

export default CartWidget;