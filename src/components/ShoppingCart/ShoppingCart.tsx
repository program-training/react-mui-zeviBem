import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

  export default function IconCart() {
    return (
        <IconButton>
            <Badge badgeContent={1} color="secondary"  anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
                <ShoppingCartIcon />
            </Badge>
        </IconButton>
    )
  }