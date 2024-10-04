import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

interface ColorPreferencesProps {
    formData: {
      colors: string[];
    };
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleMultiSelect: (name: 'aesthetic' | 'colors', value: string) => void;
}

export default function ColorPreferences({ formData, handleInputChange, handleMultiSelect }: ColorPreferencesProps) {
  const colorOptions = ['White', 'Ivory', 'Black', 'Gray', 'Silver', 'Gold', 'Rose Gold', 'Blush', 'Burgundy', 'Navy']

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="colors">Preferred Colors & Tones</Label>
        <Input
          id="colors"
          name="colors"
          value={formData.colors.join(', ')}
          onChange={handleInputChange}
          placeholder="Enter preferred colors and tones"
          className="mb-2"
        />
        <div className="flex flex-wrap gap-2 mt-2">
          {colorOptions.map((color) => (
            <Button
              key={color}
              variant={formData.colors.includes(color) ? "default" : "outline"}
              size="sm"
              onClick={() => handleMultiSelect('colors', color)}
            >
              {color}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}