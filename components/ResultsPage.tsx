//import Image from 'next/image'
import { Button } from "@/components/ui/button"

interface ResultsPageProps {
  formData: {
    fullName: string;
    season: string;
    location: string;
    aesthetic: string[];
    colors: string[];
    religion: string;
  };
}

export default function ResultsPage({ formData }: ResultsPageProps) {
  const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <div className="max-w-4xl mx-auto p-8 space-y-12">
      {/* Cover Page */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold">{formData.fullName}&apos;s Wedding Theme Guideline</h1>
        <p className="text-xl">Generated on {currentDate}</p>
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
          <p>Elegant design incorporating chosen color palette</p>
        </div>
      </section>

      {/* Personal Information */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
        <p>Wedding Season: {formData.season}</p>
        <p>Location: {formData.location}</p>
      </section>

      {/* Wedding Overview */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Wedding Overview</h2>
        <p>Brief summary of the couple&apos;s vision: [Placeholder for vision summary]</p>
        <p>Key elements of chosen aesthetic: {formData.aesthetic.join(', ')}</p>
      </section>

      {/* Aesthetic & Vision */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Aesthetic & Vision</h2>
        <p>Detailed description of the chosen wedding aesthetic: [Placeholder for aesthetic description]</p>
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center mt-4">
          <p>Moodboard incorporating generated images that reflect the aesthetic</p>
        </div>
        <p className="mt-4">Vision keywords: [Placeholder for vision keywords]</p>
      </section>

      {/* Color Palette */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Color Palette</h2>
        <div className="w-full h-32 bg-gray-200 flex items-center justify-center">
          <p>Visual representation of the chosen color scheme</p>
        </div>
        <p className="mt-4">Suggestions for applying colors: [Placeholder for color application suggestions]</p>
      </section>

      {/* Venue Inspiration */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Venue Inspiration</h2>
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
          <p>Generated images of potential venues or setups</p>
        </div>
        <p className="mt-4">Tips for adapting the theme to {formData.location}: [Placeholder for location-specific tips]</p>
      </section>

      {/* Decor Ideas */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Decor Ideas</h2>
        <p>Suggestions for decorations: [Placeholder for decor suggestions]</p>
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center mt-4">
          <p>Generated images of sample decor arrangements</p>
        </div>
      </section>

      {/* Seasonal Considerations */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Seasonal Considerations</h2>
        <p>Advice for {formData.season} weddings: [Placeholder for seasonal advice]</p>
        <p>Seasonal flora and fauna recommendations: [Placeholder for flora and fauna recommendations]</p>
        <p>Weather considerations: [Placeholder for weather considerations]</p>
      </section>

      {/* Religious/Cultural Elements */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Religious/Cultural Elements</h2>
        <p>Incorporation of {formData.religion} traditions: [Placeholder for religious/cultural elements]</p>
        <p>Suggestions for blending traditions with chosen aesthetic: [Placeholder for blending suggestions]</p>
      </section>

      {/* Personalized Recommendations */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Personalized Recommendations</h2>
        <p>AI-generated advice: [Placeholder for personalized AI advice]</p>
        <p>Unique ideas tailored to your preferences: [Placeholder for unique ideas]</p>
      </section>

      {/* Next Steps & Checklist */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Next Steps & Checklist</h2>
        <ul className="list-disc list-inside">
          <li>Finalize venue selection</li>
          <li>Choose color scheme for invitations</li>
          <li>Begin vendor selection process</li>
          <li>Schedule tastings with caterers</li>
          <li>Start shopping for attire</li>
        </ul>
      </section>

      {/* Download Button */}
      <div className="text-center">
        <Button className="mt-8">
          Download Guideline PDF
        </Button>
      </div>
    </div>
  )
}