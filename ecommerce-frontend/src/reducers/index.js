import {combineReducers} from "redux";
import {userReducer} from './userReducer';
import {searchReducer} from "./searchReducer";
import {cartReducer} from "./cartReducer";
import {drawerReducer} from "./drawerReducer";
import {couponReducer} from "./couponReducer";
import {CODReducer} from "./CODReducer";
import { SingleProductIdReducer } from "./SingleProductId";
import { JoinGroupReducer } from "./JoinGroupReducer";
import { PaymentStatusReducer } from "./paymentStatusReducer";

const rootReducer = combineReducers({
    user : userReducer,
    search : searchReducer,
    cart : cartReducer,
    drawer : drawerReducer,
    coupon : couponReducer,
    COD : CODReducer,
    SingleProductId:SingleProductIdReducer,
    JoinGroup:JoinGroupReducer,
    PaymentStatusReducer:PaymentStatusReducer,
});

export default rootReducer;
