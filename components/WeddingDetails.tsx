import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface WeddingDetailsProps {
    formData: {
      location: string;
      season: string;
    };
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | { target: { name: string; value: string } }) => void;
  }

export default function WeddingDetails({ formData, handleInputChange }: WeddingDetailsProps) {
  const seasons = ['Spring', 'Summer', 'Fall', 'Winter']

  const handleSelectChange = (value: string) => {
    handleInputChange({ target: { name: 'season', value } });
  };

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="location">Wedding Location</Label>
        <Input
          id="location"
          name="location"
          value={formData.location}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="season">Wedding Season</Label>
        <Select name="season" value={formData.season} onValueChange={handleSelectChange}>
          <SelectTrigger>
            <SelectValue placeholder="Select a season" />
          </SelectTrigger>
          <SelectContent>
            {seasons.map((season) => (
              <SelectItem key={season} value={season}>{season}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}