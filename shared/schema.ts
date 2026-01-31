import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const products = pgTable("products", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  nameAr: text("name_ar").notNull(),
  price: integer("price").notNull(),
  iconName: text("icon_name").notNull(),
  category: text("category").notNull(),
  inStock: boolean("in_stock").default(true),
});

export const insertProductSchema = createInsertSchema(products).omit({
  id: true,
});

export type InsertProduct = z.infer<typeof insertProductSchema>;
export type Product = typeof products.$inferSelect;

export interface Translations {
  heroHeadline: string;
  liliaButton: string;
  adamButton: string;
  statsScore: string;
  statsDelivery: string;
  statsApproved: string;
  tabLilia: string;
  tabAdam: string;
  tabParty: string;
  tabKhalou: string;
  aboutText: string;
  navHome: string;
  navShop: string;
  navAbout: string;
  navContact: string;
  footerText: string;
  addToCart: string;
  currency: string;
  policies: string;
  returnPolicy: string;
  exchangePolicy: string;
}

export const translations: Record<'en' | 'ar', Translations> = {
  en: {
    heroHeadline: "Who has better taste?",
    liliaButton: "View Her Picks",
    adamButton: "View His Picks",
    statsScore: "Live Battle Score: Lilia (42) - Adam (38)",
    statsDelivery: "2-Hour Delivery",
    statsApproved: "Khalou Approved",
    tabLilia: "Team Lilia",
    tabAdam: "Team Adam",
    tabParty: "Party Time",
    tabKhalou: "Khalou's Picks",
    aboutText: "Meet Khalou Mahmoud. I just pay the rent. My niece and nephew run the show.",
    navHome: "Home",
    navShop: "Shop",
    navAbout: "About",
    navContact: "Contact",
    footerText: "2025 Spacetoon Toys. All rights reserved.",
    addToCart: "Add to Cart",
    currency: "KWD",
    policies: "Policies",
    returnPolicy: "Return Policy",
    exchangePolicy: "Exchange Policy",
  },
  ar: {
    heroHeadline: "مين ذوقه أحلى؟",
    liliaButton: "شوف اختياراتها",
    adamButton: "شوف اختياراته",
    statsScore: "النتيجة: ليليا (42) - آدم (38)",
    statsDelivery: "توصيل بساعتين",
    statsApproved: "مضمونة من خالو",
    tabLilia: "فريق ليليا",
    tabAdam: "فريق آدم",
    tabParty: "وقت الحفلة",
    tabKhalou: "توصيات خالو",
    aboutText: "أهلين، أنا خالو محمود. بصراحة مو أنا اللي ممشي المحل، ولاد أختي هنن اللي بيتحكموا بكل شي.",
    navHome: "الرئيسية",
    navShop: "المتجر",
    navAbout: "عنا",
    navContact: "تواصل",
    footerText: "2025 سبيستون تويز. جميع الحقوق محفوظة.",
    addToCart: "أضف للسلة",
    currency: "د.ك",
    policies: "السياسات",
    returnPolicy: "سياسة الإرجاع",
    exchangePolicy: "سياسة الاستبدال",
  }
};
