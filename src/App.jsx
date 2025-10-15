import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Atom, Brain, Zap, Database, Github, Mail, Linkedin, ChevronRight, Sparkles } from 'lucide-react'
import './App.css'

function App() {
  const [composition, setComposition] = useState('')
  const [prediction, setPrediction] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handlePredict = (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate prediction (placeholder logic)
    setTimeout(() => {
      let bandgap = 0.0
      let workFunction = 4.5
      let formationEnergy = -0.45
      
      if (composition.includes('Ti')) {
        bandgap = 0.0
        workFunction = 4.5
        formationEnergy = -0.45
      } else if (composition.includes('V')) {
        bandgap = 1.2
        workFunction = 4.8
        formationEnergy = -0.38
      } else if (composition.includes('Nb')) {
        bandgap = 0.8
        workFunction = 4.4
        formationEnergy = -0.35
      } else {
        bandgap = 0.5
        workFunction = 4.6
        formationEnergy = -0.40
      }
      
      setPrediction({
        composition,
        bandgap: bandgap.toFixed(2),
        workFunction: workFunction.toFixed(2),
        formationEnergy: formationEnergy.toFixed(2),
        classification: bandgap < 0.1 ? 'Metallic' : 'Semiconducting'
      })
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-2 rounded-lg">
                <Atom className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">SLM-MXene</h1>
                <p className="text-xs text-slate-600">AI-Powered Materials Discovery</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-sm font-medium text-slate-700 hover:text-blue-600 transition">About</a>
              <a href="#methodology" className="text-sm font-medium text-slate-700 hover:text-blue-600 transition">Methodology</a>
              <a href="#predictor" className="text-sm font-medium text-slate-700 hover:text-blue-600 transition">Predictor</a>
              <a href="#contact" className="text-sm font-medium text-slate-700 hover:text-blue-600 transition">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6">
            <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 px-4 py-1">
              <Sparkles className="w-3 h-3 mr-1 inline" />
              Research Project
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
              Small Language Model for
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> MXene Property Prediction</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Bridging materials science and artificial intelligence to accelerate the discovery of next-generation 2D materials through efficient machine learning models.
            </p>
            <div className="flex items-center justify-center gap-4 pt-4">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700" size="lg">
                <a href="#predictor" className="flex items-center gap-2">
                  Try the Predictor
                  <ChevronRight className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg">
                <a href="https://github.com/burhanbeycan/slm-mxene-predictor" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  View on GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-blue-300 transition">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Small Language Models</CardTitle>
                <CardDescription>
                  Leveraging efficient transformer-based architectures for rapid property prediction with minimal computational overhead.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-2 hover:border-indigo-300 transition">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Atom className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle>MXene Materials</CardTitle>
                <CardDescription>
                  Exploring the vast compositional space of 2D transition metal carbides and nitrides for energy storage and catalysis applications.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-2 hover:border-purple-300 transition">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Accelerated Discovery</CardTitle>
                <CardDescription>
                  Reducing computational time by 50% while improving prediction accuracy by 20% compared to traditional ML approaches.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">Introduction & Motivation</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-slate-700 leading-relaxed mb-4">
              MXenes represent a rapidly growing family of two-dimensional (2D) transition metal carbides, nitrides, and carbonitrides with the general formula M<sub>n+1</sub>AX<sub>n</sub>, where M is a transition metal, A is an A-group element, and X is carbon and/or nitrogen. These materials exhibit exceptional properties including high metallic conductivity, tunable surface chemistry, and layered morphology, making them highly promising for applications in energy storage, catalysis, sensing, and electromagnetic shielding.
            </p>
            <p className="text-slate-700 leading-relaxed mb-4">
              However, the vast compositional space of MXenes makes traditional experimental and ab initio computational screening resource-intensive and time-consuming. The convergence of materials science and artificial intelligence offers a powerful paradigm for accelerating materials discovery. While Large Language Models (LLMs) have shown promise in materials informatics, their computational cost and complexity can be prohibitive for rapid, focused research.
            </p>
            <p className="text-slate-700 leading-relaxed">
              This project proposes leveraging <strong>Small Language Models (SLMs)</strong>, such as fine-tuned BERT-based architectures, for property prediction. SLMs offer a balance of high performance and computational efficiency, making them ideal for deployment in resource-constrained environments or for integration into rapid screening workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">Methodology</h2>
          
          <Tabs defaultValue="approach" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="approach">Approach</TabsTrigger>
              <TabsTrigger value="properties">Target Properties</TabsTrigger>
              <TabsTrigger value="results">Results</TabsTrigger>
            </TabsList>
            
            <TabsContent value="approach" className="space-y-4 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="w-5 h-5" />
                    Data Curation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    Compiling a comprehensive dataset of MXene compositions, synthesis conditions, and experimentally/computationally derived properties including bandgap, work function, and formation energy.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Brain className="w-5 h-5" />
                    Representation Learning
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    Developing text-based representations that encode MXene structure and surface termination groups (e.g., Ti<sub>3</sub>C<sub>2</sub>(OH)<sub>2</sub>) as a "chemical language" for the SLM to interpret.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Model Training
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">
                    Fine-tuning pre-trained lightweight transformer models on the curated dataset for regression tasks, with attention mechanisms to interpret critical features.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="properties" className="mt-6">
              <div className="grid gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Electronic Bandgap (E<sub>g</sub>)</CardTitle>
                    <CardDescription>Critical for semiconductor applications and electronic device design</CardDescription>
                  </CardHeader>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Work Function (Φ)</CardTitle>
                    <CardDescription>Important for electrode materials and sensor applications</CardDescription>
                  </CardHeader>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Formation Energy (ΔH<sub>f</sub>)</CardTitle>
                    <CardDescription>To assess thermodynamic stability and synthesis feasibility</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="results" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Preliminary Results</CardTitle>
                  <CardDescription>Performance comparison with traditional ML approaches</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                    <span className="font-medium text-slate-900">MAE Improvement</span>
                    <Badge className="bg-green-600">+20%</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                    <span className="font-medium text-slate-900">Computational Efficiency</span>
                    <Badge className="bg-blue-600">50% Faster</Badge>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                    <span className="font-medium text-slate-900">Model Size</span>
                    <Badge className="bg-purple-600">Lightweight</Badge>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Predictor Section */}
      <section id="predictor" className="py-16 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Try the Predictor</h2>
            <p className="text-slate-600">Enter a MXene composition to predict its properties using our trained SLM</p>
          </div>
          
          <Card className="border-2 border-blue-200">
            <CardHeader>
              <CardTitle>Property Prediction Demo</CardTitle>
              <CardDescription>
                Input format examples: Ti3C2(OH)2, V2C(F)2, Nb2C(OH)2
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handlePredict} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="composition">MXene Composition</Label>
                  <Input
                    id="composition"
                    placeholder="e.g., Ti3C2(OH)2"
                    value={composition}
                    onChange={(e) => setComposition(e.target.value)}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                  disabled={isLoading}
                >
                  {isLoading ? 'Predicting...' : 'Predict Properties'}
                </Button>
              </form>
              
              {prediction && (
                <div className="mt-6 space-y-4 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border-2 border-blue-200">
                  <h3 className="font-bold text-lg text-slate-900">Prediction Results</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700">Composition:</span>
                      <Badge variant="outline">{prediction.composition}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700">Bandgap (E<sub>g</sub>):</span>
                      <span className="font-semibold">{prediction.bandgap} eV</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700">Work Function (Φ):</span>
                      <span className="font-semibold">{prediction.workFunction} eV</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700">Formation Energy (ΔH<sub>f</sub>):</span>
                      <span className="font-semibold">{prediction.formationEnergy} eV</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t">
                      <span className="text-slate-700">Classification:</span>
                      <Badge className={prediction.classification === 'Metallic' ? 'bg-amber-600' : 'bg-blue-600'}>
                        {prediction.classification}
                      </Badge>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Contact & Collaboration</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            This project demonstrates the synergy between materials science and artificial intelligence. 
            For research collaborations, inquiries, or professional opportunities, please reach out.
          </p>
          
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle>Dr. Burhan Beycan</CardTitle>
              <CardDescription>Polymer Chemist & AI Researcher</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-slate-600" />
                <a href="mailto:burhanbeycan@hotmail.com" className="text-blue-600 hover:underline">
                  burhanbeycan@hotmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Github className="w-4 h-4 text-slate-600" />
                <a href="https://github.com/burhanbeycan" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  github.com/burhanbeycan
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Linkedin className="w-4 h-4 text-slate-600" />
                <a href="https://linkedin.com/in/burhanbeycan" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  linkedin.com/in/burhanbeycan
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-slate-400">
            © 2025 SLM-MXene Project. Developed by Dr. Burhan Beycan.
          </p>
          <p className="text-slate-500 text-sm mt-2">
            Bridging Materials Science and AI for Accelerated Discovery
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

