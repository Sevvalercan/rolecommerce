export default function Navbar(){
    return (
        <nav className="bg-white shadow">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
            <div className="text-xl font-bold">RoleCommerce</div>
            <div className="space-x-4">
            <a href="/" className="text-gray-700 hover:text-gray-900">Home</a>
            <a href="/products" className="text-gray-700 hover:text-gray-900">Products</a>
            <a href="/cart" className="text-gray-700 hover:text-gray-900">Cart</a>
            </div>
        </div>
        </nav>
    );
}