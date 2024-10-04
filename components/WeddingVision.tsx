import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

interface WeddingVisionProps {
    formData: {
      vision: string[];
    };
    handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    handleMultiSelect: (name: 'aesthetic' | 'colors' | 'vision', value: string) => void;
}

export default function WeddingVision({ formData, handleInputChange, handleMultiSelect }: WeddingVisionProps) {
    const visionSuggestions = ['Romantic', 'Elegant', 'Rustic', 'Modern', 'Bohemian', 'Classic', 'Vintage', 'Glamorous']
  
    return (
      <div className="space-y-4">
        <div>
          <Label htmlFor="vision">Describe Your Wedding Vision (Optional)</Label>
          <Textarea
            id="vision"
            name="vision"
            value={formData.vision.join(', ')}
            onChange={handleInputChange}
            placeholder="Describe your dream wedding..."
            rows={4}
          />
        </div>
        <div>
          <Label>Suggested Themes</Label>
          <div className="flex flex-wrap gap-2 mt-2">
            {visionSuggestions.map((suggestion) => (
              <Button
                key={suggestion}
                variant={formData.vision.includes(suggestion) ? "default" : "outline"}
                size="sm"
                onClick={() => handleMultiSelect('vision', suggestion)}
              >
                {suggestion}
              </Button>
            ))}
          </div>
        </div>
      </div>
    )
  }