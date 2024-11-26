import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { QrCode, Globe, ArrowRight, ArrowRightCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-600 text-white p-2 sm:p-4 md:p-8 relative flex flex-col">
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-0 max-w-[80%] sm:max-w-[60%]">
          ដើម្បីពិនិត្យមើលសុពលភាពនៃប្រដាប់ត្រាឌីជីថលរបស់អ្នក
        </h1>
        <div className="flex items-center space-x-2 text-sm sm:text-base">
          <Globe className="w-4 h-4 sm:w-6 sm:h-6" />
          <span>ភាសាខ្មែរ</span>
          <Image
            src="/placeholder.svg"
            width={30}
            height={20}
            alt="Cambodia flag"
            className="w-5 h-3 sm:w-6 sm:h-4"
          />
        </div>
      </header>

      <main className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-8 flex-grow">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <Image
            src="/placeholder.svg"
            width={600}
            height={400}
            alt="Digital registration illustration"
            className="w-[600px] h-auto"
          />
        </div>

        <Card className="w-full md:w-1/2 lg:w-1/3 bg-blue-600 text-white">
          <CardContent className="p-4 sm:p-6">
            <Button
              variant="outline"
              className="w-full mb-4 text-blue-600 bg-white hover:bg-blue-100 text-xs sm:text-sm"
            >
              <ArrowRightCircle className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              ចូលប្រព័ន្ធ
            </Button>
            <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4">
              ការណែនាំ៖
            </h2>
            <ol className="list-decimal list-inside space-y-1 sm:space-y-2 text-xs sm:text-sm">
              <li>បើកការណែនាំទៅកាន់គណនីរបស់អ្នកតាមរយៈ Portal</li>
              <li>ចូលទៅកាន់គណនីរបស់អ្នកតាមរយៈ Portal</li>
              <li>បើកការណែនាំទៅកាន់គណនីរបស់អ្នកតាមរយៈ Portal</li>
              <li>ចូលទៅកាន់គណនីរបស់អ្នកតាមរយៈ Portal ដោយសុវត្ថិភាព។</li>
            </ol>
          </CardContent>
        </Card>
      </main>

      <footer className="mt-4 sm:mt-8">
        <div className="flex justify-center space-x-2 sm:space-x-4 overflow-x-auto pb-2">
          {[...Array(7)].map((_, i) => (
            <Image
              key={i}
              src="/placeholder.svg"
              width={50}
              height={50}
              alt={`Logo ${i + 1}`}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
          ))}
        </div>
        <p className="text-center mt-2 sm:mt-4 text-xs sm:text-sm">
          v4.3.1 - Privacy Policy
        </p>
      </footer>
    </div>
  );
}
