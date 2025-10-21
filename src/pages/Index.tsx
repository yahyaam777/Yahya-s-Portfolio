import Sidebar from "@/components/Sidebar";
import TabNavigation from "@/components/TabNavigation";
import BackToTop from "@/components/BackToTop";

/* Main Portfolio Page
 * Sidebar layout with tab-based navigation
 * All components are modular and can be edited independently
 */
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Using the photo you added to `public/` as `yahya.png` */}
          <Sidebar photoSrc="/yahya.png" />
          <TabNavigation />
        </div>
      </div>
      <BackToTop />
    </div>
  );
};

export default Index;
