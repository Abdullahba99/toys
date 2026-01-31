import { Link } from 'wouter';
import { useLanguage } from '@/lib/language-context';
import { Button } from '@/components/ui/button';
import { ArrowLeft, RefreshCw } from 'lucide-react';

export default function ExchangePolicyPage() {
  const { isRTL, t } = useLanguage();

  const contentEn = {
    title: "Exchange Policy",
    intro: "Need a different size, color, or product? We make exchanges easy at Spacetoon Toys!",
    sections: [
      {
        title: "Exchange Period",
        content: "You can exchange items within 14 days of purchase. The item must be unused, in its original packaging, and accompanied by your receipt or order confirmation."
      },
      {
        title: "What Can Be Exchanged",
        content: "Most toys and products can be exchanged for a different item of equal or greater value. If the new item costs more, you'll pay the difference. If it costs less, we'll refund the difference."
      },
      {
        title: "Defective Products",
        content: "If you received a defective or damaged item, we'll exchange it immediately at no extra cost. Please contact us within 48 hours of receiving your order for defective items."
      },
      {
        title: "How to Exchange",
        content: "Visit our store in Kuwait with the item and your receipt, or contact us via WhatsApp to arrange an exchange. For delivery orders, we can arrange pickup of the original item when delivering the new one."
      },
      {
        title: "Gift Exchanges",
        content: "Gifts can be exchanged with a gift receipt. Without a receipt, we can offer store credit based on the current selling price of the item."
      }
    ]
  };

  const contentAr = {
    title: "سياسة الاستبدال",
    intro: "تحتاج حجم مختلف، لون، أو منتج آخر؟ نجعل الاستبدال سهلاً في سبيستون تويز!",
    sections: [
      {
        title: "مدة الاستبدال",
        content: "يمكنك استبدال المنتجات خلال 14 يوماً من الشراء. يجب أن يكون المنتج غير مستخدم، في عبوته الأصلية، ومرفق بالإيصال أو تأكيد الطلب."
      },
      {
        title: "ما يمكن استبداله",
        content: "يمكن استبدال معظم الألعاب والمنتجات بمنتج آخر بنفس القيمة أو أعلى. إذا كان المنتج الجديد أغلى، ستدفع الفرق. إذا كان أرخص، سنرد لك الفرق."
      },
      {
        title: "المنتجات المعيبة",
        content: "إذا استلمت منتجاً معيباً أو تالفاً، سنستبدله فوراً بدون تكلفة إضافية. يرجى التواصل معنا خلال 48 ساعة من استلام طلبك للمنتجات المعيبة."
      },
      {
        title: "كيفية الاستبدال",
        content: "زر متجرنا في الكويت مع المنتج وإيصالك، أو تواصل معنا عبر واتساب لترتيب الاستبدال. لطلبات التوصيل، يمكننا ترتيب استلام المنتج الأصلي عند توصيل الجديد."
      },
      {
        title: "استبدال الهدايا",
        content: "يمكن استبدال الهدايا مع إيصال الهدية. بدون إيصال، يمكننا تقديم رصيد متجر بناءً على سعر البيع الحالي للمنتج."
      }
    ]
  };

  const content = isRTL ? contentAr : contentEn;

  return (
    <div className="min-h-screen bg-gray-50/50 pt-20 pb-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="gap-2 mb-4" data-testid="button-back-home">
              <ArrowLeft className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
              <span>{isRTL ? 'العودة للرئيسية' : 'Back to Home'}</span>
            </Button>
          </Link>

          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-adam/10">
            <RefreshCw className="w-8 h-8 text-adam" />
            <h1 className="text-2xl md:text-3xl font-bold text-adam" data-testid="text-policy-title">
              {content.title}
            </h1>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 space-y-6">
          <p className="text-muted-foreground text-lg" data-testid="text-policy-intro">
            {content.intro}
          </p>

          {content.sections.map((section, index) => (
            <div key={index} className="border-t pt-6" data-testid={`section-policy-${index}`}>
              <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
              <p className="text-muted-foreground">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
