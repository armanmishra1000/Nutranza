import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-accent text-white pt-20 pb-10">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
                            <span className="text-primary">Nutra</span>nza
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            We provide premium quality nutritional products to fuel your healthy lifestyle.
                            Pure ingredients, powerful results.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors group">
                                <Instagram size={18} className="text-gray-300 group-hover:text-white" />
                            </a>
                            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors group">
                                <Facebook size={18} className="text-gray-300 group-hover:text-white" />
                            </a>
                            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors group">
                                <Twitter size={18} className="text-gray-300 group-hover:text-white" />
                            </a>
                            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary transition-colors group">
                                <Youtube size={18} className="text-gray-300 group-hover:text-white" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold font-heading">Shop</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="/shop/peanut-butter" className="hover:text-secondary transition-colors">Peanut Butter</Link></li>
                            <li><Link href="/shop/protein-oats" className="hover:text-secondary transition-colors">Protein Oats</Link></li>
                            <li><Link href="/shop/muesli" className="hover:text-secondary transition-colors">Muesli</Link></li>
                            <li><Link href="/shop/shilajit" className="hover:text-secondary transition-colors">Shilajit</Link></li>
                            <li><Link href="/shop/rice-cake" className="hover:text-secondary transition-colors">Rice Cake</Link></li>
                            <li><Link href="/shop/protein-bars" className="hover:text-secondary transition-colors">Protein Bars</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold font-heading">Company</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
                            <li><Link href="/blog" className="hover:text-secondary transition-colors">Blog</Link></li>
                            <li><Link href="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-secondary transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold font-heading">Stay Updated</h4>
                        <p className="text-sm text-gray-400">
                            Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
                        </p>
                        <form className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white/10 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary border border-white/20 placeholder-gray-500 text-sm"
                            />
                            <button
                                type="submit"
                                className="bg-primary text-accent px-4 py-3 rounded-xl font-semibold hover:bg-secondary hover:text-white transition-all shadow-lg hover:shadow-primary/20 text-sm"
                            >
                                Subscribe
                            </button>
                        </form>
                        <div className="pt-4 space-y-2">
                            <div className="flex items-center gap-3 text-sm text-gray-400">
                                <Mail size={16} className="text-primary" />
                                <span>support@nutranza.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-400">
                                <Phone size={16} className="text-primary" />
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-gray-400">
                                <MapPin size={16} className="text-primary" />
                                <span>123 Healthy Way, Nutrition City</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>© {new Date().getFullYear()} Nutranza. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white transition-colors">Cookie Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
