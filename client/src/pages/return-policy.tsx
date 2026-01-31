import { Link } from 'wouter';
import { useLanguage } from '@/lib/language-context';
import { Button } from '@/components/ui/button';
import { ArrowLeft, RotateCcw } from 'lucide-react';

export default function ReturnPolicyPage() {
  const { isRTL, t } = useLanguage();

  const contentEn = {
    title: "Return Policy",
    intro: "At Spacetoon Toys, we want you to be completely satisfied with your purchase. If you're not happy with your order, we're here to help.",
    sections: [
      {
        title: "Return Period",
        content: "You may return most items within 14 days of delivery for a full refund. Items must be unused, in their original packaging, and in the same condition as when you received them."
      },
      {
        title: "Non-Returnable Items",
        content: "Some items cannot be returned, including: opened toys with broken seals, customized or personalized items, party supplies that have been used, and sale items marked as final sale."
      },
      {
        title: "How to Return",
        content: "To initiate a return, please contact us via WhatsApp or visit our store in Kuwait. Bring your receipt or order confirmation. We'll process your refund within 5-7 business days."
      },
      {
        title: "Refund Method",
        content: "Refunds will be issued to the original payment method. Cash payments will receive cash refunds. Card payments will be refunded to the same card."
      }
    ]
  };

  const contentAr = {
    title: "سياسة الإرجاع",
    intro: "في سبيستون تويز، نريدك أن تكون راضياً تماماً عن مشترياتك. إذا لم تكن سعيداً بطلبك، نحن هنا للمساعدة.",
    sections: [
      {
        title: "مدة الإرجاع",
        content: "يمكنك إرجاع معظم المنتجات خلال 14 يوماً من التوصيل لاسترداد كامل المبلغ. يجب أن تكون المنتجات غير مستخدمة، في عبوتها الأصلية، وبنفس الحالة التي استلمتها بها."
      },
      {
        title: "المنتجات غير القابلة للإرجاع",
        content: "بعض المنتجات لا يمكن إرجاعها، بما في ذلك: الألعاب المفتوحة مع أختام مكسورة، المنتجات المخصصة أو الشخصية، مستلزمات الحفلات المستخدمة، ومنتجات التخفيضات المحددة كبيع نهائي."
      },
      {
        title: "كيفية الإرجاع",
        content: "لبدء عملية الإرجاع، يرجى التواصل معنا عبر واتساب أو زيارة متجرنا في الكويت. أحضر إيصالك أو تأكيد الطلب. سنعالج استرداد أموالك خلال 5-7 أيام عمل."
      },
      {
        title: "طريقة الاسترداد",
        content: "سيتم إصدار المبالغ المستردة إلى طريقة الدفع الأصلية. المدفوعات النقدية ستسترد نقداً. المدفوعات بالبطاقة ستسترد إلى نفس البطاقة."
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

          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-lilia/10">
            <RotateCcw className="w-8 h-8 text-lilia" />
            <h1 className="text-2xl md:text-3xl font-bold text-lilia" data-testid="text-policy-title">
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
