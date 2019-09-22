import Link from 'next/link';
import { Button } from 'antd'; 
ReactDOM.render(<Button />, mountNode);

export default () => <div>Hey there! Welcome to next.js! <Link href="/product">Product</Link></div>