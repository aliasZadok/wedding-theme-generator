'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import PersonalInfo from '@/components/PersonalInfo'
import WeddingDetails from '@/components/WeddingDetails'
import Aesthetic from '@/components/Aesthetic'
import ColorPreferences from '@/components/ColorPreferences'
import WeddingVision from '@/components/WeddingVision'
import ResultsPage from '@/components/ResultsPage'

interface FormData {
  fullName: string;
  email: string;
  location: string;
  season: string;
  religion: string;
  customReligion: string;
  aesthetic: string[];
  colors: string[];
  vision: string[];
}

export default function WeddingThemeGenerator() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    location: '',
    season: '',
    religion: '',
    customReligion: '',
    aesthetic: [],
    colors: [],
    vision: [],
  })

  const totalSteps = 5

  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1)
    }
  }

  const handlePrevious = () => {
    setStep(step - 1)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement> | { target: { name: string; value: string } }) => {
    const { name, value } = e.target
    if (name === 'vision') {
      setFormData(prev => ({ ...prev, [name]: value.split(',').map(item => item.trim()) }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }
  const handleMultiSelect = (name: 'aesthetic' | 'colors' | 'vision', value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: prev[name].includes(value)
        ? prev[name].filter((item: string) => item !== value)
        : [...prev[name], value]
    }))
  }

  const validateStep = () => {
    switch (step) {
      case 1:
        return formData.fullName && formData.email
      case 2:
        return formData.location && formData.season
      case 3:
        return formData.religion && (formData.religion !== 'Other' || formData.customReligion) && formData.aesthetic.length > 0
      case 4:
        return formData.colors.length > 0
      default:
        return true
    }
  }

  const handleSubmit = () => {
    if (validateStep()) {
      setStep(totalSteps + 1)
    }
  }

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center">
      <div className="w-full max-w-2xl p-8">
        {step <= totalSteps && (
          <>
            <h1 className="text-3xl font-bold mb-6 text-center">Wedding Theme Guideline Generator</h1>
            <Progress value={(step / totalSteps) * 100} className="mb-6" />
            <p className="text-center mb-6">Step {step} of {totalSteps}</p>
          </>
        )}
        {step === 1 && (
          <PersonalInfo formData={formData} handleInputChange={handleInputChange} />
        )}
        {step === 2 && (
          <WeddingDetails formData={formData} handleInputChange={handleInputChange} />
        )}
        {step === 3 && (
          <Aesthetic formData={formData} handleInputChange={handleInputChange} handleMultiSelect={handleMultiSelect} />
        )}
        {step === 4 && (
          <ColorPreferences formData={formData} handleInputChange={handleInputChange} handleMultiSelect={handleMultiSelect} />
        )}
        {step === 5 && (
          <WeddingVision formData={formData} handleInputChange={handleInputChange} handleMultiSelect={handleMultiSelect} />
        )}
        {step > totalSteps && (
          <ResultsPage formData={formData} />
        )}
        {step <= totalSteps && (
          <div className="flex justify-between mt-6">
            {step > 1 && (
              <Button onClick={handlePrevious} variant="default">Previous</Button>
            )}
            {step < totalSteps && (
              <Button onClick={handleNext} disabled={!validateStep()} className="ml-auto">Next</Button>
            )}
            {step === totalSteps && (
              <Button onClick={handleSubmit} disabled={!validateStep()} className="ml-auto">Submit</Button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}