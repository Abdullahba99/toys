import { type User, type InsertUser, type Product, type InsertProduct } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getProducts(): Promise<Product[]>;
  getProductsByCategory(category: string): Promise<Product[]>;
  getProduct(id: string): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private products: Map<string, Product>;

  constructor() {
    this.users = new Map();
    this.products = new Map();
    this.seedProducts();
  }

  private seedProducts() {
    const sampleProducts: InsertProduct[] = [
      { name: "Princess Doll Set", nameAr: "طقم دمية الأميرة", price: 45000, iconName: "crown", category: "lilia", inStock: true },
      { name: "Sparkle Unicorn", nameAr: "يونيكورن لامع", price: 35000, iconName: "sparkles", category: "lilia", inStock: true },
      { name: "Tea Party Set", nameAr: "طقم حفلة الشاي", price: 28000, iconName: "coffee", category: "lilia", inStock: true },
      { name: "Magic Wand", nameAr: "عصا سحرية", price: 15000, iconName: "wand-2", category: "lilia", inStock: true },
      { name: "Fairy Wings", nameAr: "أجنحة الجنية", price: 22000, iconName: "feather", category: "lilia", inStock: false },
      { name: "Pink Castle", nameAr: "القلعة الوردية", price: 85000, iconName: "castle", category: "lilia", inStock: true },
      
      { name: "Race Car Set", nameAr: "طقم سيارات السباق", price: 55000, iconName: "car", category: "adam", inStock: true },
      { name: "Robot Warrior", nameAr: "روبوت المحارب", price: 42000, iconName: "bot", category: "adam", inStock: true },
      { name: "Dinosaur Collection", nameAr: "مجموعة الديناصورات", price: 38000, iconName: "bone", category: "adam", inStock: true },
      { name: "Super Hero Cape", nameAr: "عباءة البطل الخارق", price: 18000, iconName: "shield", category: "adam", inStock: true },
      { name: "Space Rocket", nameAr: "صاروخ الفضاء", price: 65000, iconName: "rocket", category: "adam", inStock: true },
      { name: "Construction Set", nameAr: "طقم البناء", price: 48000, iconName: "hammer", category: "adam", inStock: false },
      
      { name: "Party Balloons Pack", nameAr: "حزمة بالونات الحفلة", price: 8000, iconName: "party-popper", category: "party", inStock: true },
      { name: "Birthday Crown", nameAr: "تاج عيد الميلاد", price: 12000, iconName: "crown", category: "party", inStock: true },
      { name: "Confetti Cannon", nameAr: "مدفع الكونفيتي", price: 15000, iconName: "sparkles", category: "party", inStock: true },
      { name: "Party Horn Set", nameAr: "طقم أبواق الحفلة", price: 6000, iconName: "megaphone", category: "party", inStock: true },
      
      { name: "Classic Chess Set", nameAr: "طقم شطرنج كلاسيكي", price: 32000, iconName: "trophy", category: "khalou", inStock: true },
      { name: "Science Kit", nameAr: "طقم العلوم", price: 58000, iconName: "flask-conical", category: "khalou", inStock: true },
      { name: "Art Supply Box", nameAr: "صندوق أدوات الرسم", price: 45000, iconName: "palette", category: "khalou", inStock: true },
      { name: "Building Blocks", nameAr: "مكعبات البناء", price: 35000, iconName: "blocks", category: "khalou", inStock: true },
    ];

    sampleProducts.forEach(product => {
      const id = randomUUID();
      this.products.set(id, { ...product, id });
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProductsByCategory(category: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(p => p.category === category);
  }

  async getProduct(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = randomUUID();
    const product: Product = { ...insertProduct, id };
    this.products.set(id, product);
    return product;
  }
}

export const storage = new MemStorage();
