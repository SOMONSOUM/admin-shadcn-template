import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Metrics = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <Card className="bg-[#4285f4]">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-white">សរុប</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <div className="text-2xl font-bold text-white sm:text-4xl">0</div>
            <p className="text-xs text-white/80">កំពុងដំណើរការ</p>
          </div>
        </CardContent>
      </Card>
      <Card className="bg-[#ea4335]">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-white">សរុប</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <div className="text-2xl font-bold text-white sm:text-4xl">0</div>
            <p className="text-xs text-white/80">បានបដិសេធ</p>
          </div>
        </CardContent>
      </Card>
      <Card className="bg-[#93e4c1]">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-white">សរុប</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-2 text-center sm:gap-4">
            <div>
              <div className="text-2xl font-bold text-white sm:text-4xl">
                30
              </div>
              <p className="text-xs text-white/80">បានអនុម័ត</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-white sm:text-4xl">0</div>
              <p className="text-xs text-white/80">រង់ចាំការអនុម័ត</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card className="bg-[#34a853]">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-white">សរុប</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <div className="text-2xl font-bold text-white sm:text-4xl">30</div>
            <p className="text-xs text-white/80">សរុប</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
