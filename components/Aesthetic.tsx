import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

interface AestheticProps {
    formData: {
      religion: string;
      customReligion: string;
      aesthetic: string[];
    };
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | { target: { name: string; value: string } }) => void;
    handleMultiSelect: (name: 'aesthetic' | 'colors', value: string) => void;
  }

export default function Aesthetic({ formData, handleInputChange, handleMultiSelect }: AestheticProps) {
  const religions = ['Christianity', 'Islam', 'Hinduism', 'Buddhism', 'Judaism', 'Other']
  const aestheticSuggestions = {
    Christianity: ['Traditional', 'Modern', 'Rustic', 'Elegant', 'Classic'],
    Islam: ['Elegant', 'Minimalist', 'Cultural', 'Modern', 'Traditional'],
    Hinduism: ['Colorful', 'Traditional', 'Fusion', 'Royal', 'Bohemian'],
    Buddhism: ['Zen', 'Nature-inspired', 'Minimalist', 'Peaceful', 'Spiritual'],
    Judaism: ['Traditional', 'Modern', 'Rustic', 'Elegant', 'Cultural'],
    Other: ['Bohemian', 'Vintage', 'Contemporary', 'Romantic', 'Eclectic']
  }

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="religion">Religion</Label>
        <Select name="religion" value={formData.religion} onValueChange={(value) => handleInputChange({ target: { name: 'religion', value } })}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a religion" />
          </SelectTrigger>
          <SelectContent>
            {religions.map((religion) => (
              <SelectItem key={religion} value={religion}>{religion}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      {formData.religion === 'Other' && (
        <div>
          <Label htmlFor="customReligion">Custom Religion</Label>
          <Input
            id="customReligion"
            name="customReligion"
            value={formData.customReligion}
            onChange={handleInputChange}
            required
          />
        </div>
      )}
      <div>
        <Label htmlFor="aesthetic">Wedding Aesthetic</Label>
        <Input
          id="aesthetic"
          name="aesthetic"
          value={formData.aesthetic.join(', ')}
          onChange={handleInputChange}
          placeholder="Enter wedding aesthetics"
          className="mb-2"
        />
        <div className="flex flex-wrap gap-2 mt-2">
          {aestheticSuggestions[formData.religion as keyof typeof aestheticSuggestions || 'Other'].map((suggestion) => (
            <Button
              key={suggestion}
              variant={formData.aesthetic.includes(suggestion) ? "default" : "outline"}
              size="sm"
              onClick={() => handleMultiSelect('aesthetic', suggestion)}
            >
              {suggestion}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}