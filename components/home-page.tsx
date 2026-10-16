"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Search, ShoppingBag, Pause, Play, Headphones, Volume2, ShieldCheck, Sparkles } from "lucide-react"
import Image from "next/image"

const dropdownMenus = {
  Store: {
    sections: [
      {
        title: "Shop Audio",
        items: [
          "Shop the Latest",
          "Auralis Max",
          "Auralis Pro In-Ear",
          "Auralis Studio Monitor",
          "Auralis One Home Speaker",
          "Auralis SoundStage 360",
          "Custom Audio Accessories",
        ],
      },
      {
        title: "Services & Trade",
        items: [
          "Find an Experience Store",
          "Order Status",
          "Auralis Trade-In Program",
          "Flexible Financing",
          "Personalized Sound Setup",
        ],
      },
      {
        title: "Special Programs",
        items: ["Music Creators & Studios", "Audio Engineering Education", "Enterprise Sound"],
      },
    ],
  },
  "Auralis Max": {
    sections: [
      {
        title: "Explore Auralis Max",
        items: [
          "Explore Auralis Max",
          "Studio Edition",
          "Acoustic Architecture",
          "Design & Craftsmanship",
          "Technical Specifications",
        ],
      },
      {
        title: "Personalization",
        items: ["Order Auralis Max", "Custom Engraving", "Interchangeable Cushions", "Smart Travel Case"],
      },
      {
        title: "Audio Technology",
        items: [
          "Computational Audio Engine",
          "Lossless USB-C Audio",
          "Active Noise Cancellation",
          "Transparency Mode",
          "AuralisCare+ Coverage",
        ],
      },
    ],
  },
  Earbuds: {
    sections: [
      {
        title: "Explore Earbuds",
        items: [
          "Explore All In-Ear",
          "Auralis Pro (Gen 2)",
          "Auralis Air Wireless",
          "Auralis Sport Active",
          "Audiophile Fit Comparison",
        ],
      },
      {
        title: "Shop Earbuds",
        items: ["Buy Auralis Pro", "MagSafe Wireless Case", "Memory Foam Tips", "Sport Wingtips"],
      },
      {
        title: "Features",
        items: ["Adaptive Audio", "Conversation Awareness", "Spatial Head Tracking", "Sweat & Water Resistance"],
      },
    ],
  },
  "Home Audio": {
    sections: [
      {
        title: "Explore Speakers",
        items: [
          "Explore Home Audio",
          "Auralis One Studio",
          "Auralis Mini Ambient",
          "SoundStage 360 Cinema",
          "Multiroom Audio System",
        ],
      },
      {
        title: "Shop Home Audio",
        items: ["Shop Auralis One", "Stereo Pairing Bundles", "Floor Stands & Wall Mounts", "Hi-Res Audio Cables"],
      },
      {
        title: "Smart Sound",
        items: [
          "Room Acoustic Sensing",
          "AirPlay & Cast Streaming",
          "Studio Multiroom Sync",
          "High-Resolution Lossless",
        ],
      },
    ],
  },
  "Spatial Sound": {
    sections: [
      {
        title: "Spatial Technology",
        items: [
          "Experience Spatial Audio",
          "Personalized HRTF Profiling",
          "Dynamic Head Tracking",
          "Dolby Atmos Mastering",
          "Ultra-Low Latency Engine",
        ],
      },
      {
        title: "Supported Platforms",
        items: ["Auralis Sound Studio", "Hi-Res Audio Partners", "Cinema Immersion Mode", "Pro Gaming Sound"],
      },
      {
        title: "Sound Guides",
        items: ["What is Spatial Audio?", "Acoustic Seal Calibration", "Hearing Safety & Wellness"],
      },
    ],
  },
  Accessories: {
    sections: [
      {
        title: "Headphone Essentials",
        items: [
          "Acoustic Mesh Cushions",
          "Smart Magnetic Travel Case",
          "3.5mm to USB-C Audio Cable",
          "Braided Charging Cable",
          "Aluminum Headphone Stand",
        ],
      },
      {
        title: "Pro Gear & Adapters",
        items: ["High-Res DAC Adapter", "Studio Flight Adapter", "Replacement Eartips", "Hard Shell Carrying Case"],
      },
      {
        title: "Protection & Care",
        items: ["AuralisCare+ Plans", "Microfiber Cleaning Cloth", "Silicon Cup Protectors"],
      },
    ],
  },
  Support: {
    sections: [
      {
        title: "Product Support",
        items: [
          "Auralis Max Support",
          "Auralis Pro Support",
          "Home Audio Setup",
          "Bluetooth & Pairing Help",
          "Firmware Updates",
        ],
      },
      {
        title: "Service & Repairs",
        items: [
          "Auralis Repair Service",
          "Battery Replacement",
          "Check Warranty & Coverage",
          "Schedule In-Store Demo",
        ],
      },
      {
        title: "Resources",
        items: [
          "Auralis Connect App",
          "User Manuals & Downloads",
          "Acoustic Calibration Tool",
          "Contact Audio Concierge",
        ],
      },
    ],
  },
}

const colorVariants = [
  { name: "Space Graphite", color: "#3c3d42", accent: "from-zinc-800 to-zinc-950" },
  { name: "Silver Frost", color: "#e3e4e5", accent: "from-slate-200 to-slate-400" },
  { name: "Sky Azure", color: "#97a8b3", accent: "from-sky-300 to-sky-600" },
  { name: "Midnight Rose", color: "#d8a69d", accent: "from-rose-300 to-rose-600" },
  { name: "Nordic Sage", color: "#9ca89a", accent: "from-emerald-300 to-emerald-700" },
]

export default function HomePage() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [selectedColor, setSelectedColor] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleMouseEnter = (menu: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setActiveDropdown(menu)
  }

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 100)
  }

  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="bg-white/95 backdrop-blur-md border-b border-black/[0.06]">
          <div className="mx-auto flex h-12 max-w-[1040px] items-center justify-between px-5 text-[13px] text-[#1d1d1f]">
            {/* Custom Brand Logo */}
            <a
              href="#"
              className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity tracking-tight"
            >
              <div className="flex items-center justify-center h-7 w-7 rounded-full bg-[#1d1d1f] text-white shadow-sm">
                <Headphones className="h-3.5 w-3.5" />
              </div>
              <span className="font-semibold text-sm tracking-[0.16em] uppercase text-[#1d1d1f]">AURALIS</span>
            </a>

            {/* Menu Links */}
            <div className="hidden md:flex items-center gap-7">
              {Object.keys(dropdownMenus).map((menuKey) => (
                <a
                  key={menuKey}
                  href="#"
                  className={`opacity-80 hover:opacity-100 transition-opacity font-medium ${
                    activeDropdown === menuKey ? "text-[#0071e3] opacity-100 font-semibold" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter(menuKey)}
                  onMouseLeave={handleMouseLeave}
                >
                  {menuKey}
                </a>
              ))}
            </div>

            {/* Nav Actions */}
            <div className="flex items-center gap-4">
              <button
                aria-label="Search Auralis"
                className="opacity-75 hover:opacity-100 transition-opacity p-1.5 rounded-full hover:bg-black/5"
              >
                <Search className="h-4 w-4 text-[#1d1d1f]" />
              </button>
              <button
                aria-label="Bag"
                className="opacity-75 hover:opacity-100 transition-opacity p-1.5 rounded-full hover:bg-black/5"
              >
                <ShoppingBag className="h-4 w-4 text-[#1d1d1f]" />
              </button>
            </div>
          </div>
        </div>

        {/* Dropdown Menu */}
        <div
          className={`absolute left-0 right-0 bg-[#f5f5f7]/98 backdrop-blur-2xl border-b border-black/10 transition-all duration-200 ease-in-out overflow-hidden shadow-2xl ${
            activeDropdown ? "max-h-[500px] opacity-100 py-10" : "max-h-0 opacity-0 py-0"
          }`}
          onMouseEnter={() => {
            if (dropdownTimeoutRef.current) {
              clearTimeout(dropdownTimeoutRef.current)
            }
          }}
          onMouseLeave={handleMouseLeave}
        >
          {activeDropdown && dropdownMenus[activeDropdown as keyof typeof dropdownMenus] && (
            <div className="mx-auto max-w-[1040px] px-8">
              <div className="grid grid-cols-3 gap-14">
                {dropdownMenus[activeDropdown as keyof typeof dropdownMenus].sections.map((section, idx) => (
                  <div key={idx}>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-[#86868b] mb-4">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <a
                            href="#"
                            className="text-xl md:text-2xl font-medium text-[#1d1d1f] hover:text-[#0071e3] transition-colors block leading-tight"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen pt-12 snap-start snap-always">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video ref={videoRef} className="h-full w-full object-cover" autoPlay muted loop playsInline>
            <source
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/airpod-max-WbDUTEVA7cOgSLowVoY2R0MCH4D8NY.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="absolute right-8 top-20 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(0,0,0,0.5)] backdrop-blur-md text-white hover:bg-[rgba(0,0,0,0.7)] transition-colors shadow-lg"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
        </button>

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col justify-end px-8 pb-16">
          <div className="max-w-[980px] mx-auto w-full">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 backdrop-blur-md border border-white/60 mb-3 shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-[#0071e3]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#1d1d1f]">
                Flagship Wireless Acoustic System
              </span>
            </div>
            <p className="text-[20px] font-semibold text-[#1d1d1f] mb-1 tracking-tight">Auralis Max</p>
            <h1 className="text-[72px] md:text-[88px] font-semibold leading-[1.02] tracking-tight text-[#1d1d1f] mb-6">
              Symphonic boom.
            </h1>

            {/* Finish Selector */}
            <div className="mb-6 flex items-center gap-3">
              <span className="text-xs font-semibold text-[#1d1d1f]/80 uppercase tracking-wider">Finish:</span>
              <div className="flex items-center gap-2">
                {colorVariants.map((c, i) => (
                  <button
                    key={c.name}
                    onClick={() => setSelectedColor(i)}
                    title={c.name}
                    className={`h-6 w-6 rounded-full border-2 transition-transform ${
                      selectedColor === i ? "border-[#0071e3] scale-110 shadow-xs" : "border-white/80 hover:scale-105"
                    }`}
                    style={{ backgroundColor: c.color }}
                  />
                ))}
              </div>
              <span className="text-xs font-medium text-[#6e6e73] ml-1">{colorVariants[selectedColor].name}</span>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <p className="text-[19px] font-semibold text-[#1d1d1f]">AED 2,099</p>
              <Button
                size="lg"
                className="rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white px-6 h-11 text-[17px] font-medium shadow-sm transition-all"
              >
                Buy Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-black/15 bg-white/70 backdrop-blur text-[#1d1d1f] hover:bg-white px-6 h-11 text-[17px] font-medium transition-all"
              >
                Experience Specs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Composition Section */}
      <section className="relative h-screen flex items-center justify-center bg-[#f5f5f7] snap-start snap-always overflow-hidden">
        <Image src="/digital-crown.jpg" alt="Auralis Precision Crown Controller" fill className="object-cover" priority />
        <div className="absolute top-0 left-0 right-0 pt-20 text-center z-10 px-4">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#86868b] mb-2">
            Auralis Acoustic Engineering
          </p>
          <h2 className="text-5xl md:text-6xl font-semibold text-[#1d1d1f] leading-tight tracking-tight">
            A radically original
            <br />
            composition.
          </h2>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="h-screen flex items-center justify-center bg-[#f5f5f7] snap-start snap-always px-4">
        <div className="w-full h-full max-w-[1400px] mx-auto flex flex-col md:flex-row gap-4 py-4">
          {/* Card 1 */}
          <div className="relative flex-1 h-full rounded-3xl overflow-hidden bg-white shadow-xs">
            <Image
              src="/airpods-cushions.jpg"
              alt="Auralis Engineered Memory Foam Cushions"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 pb-12 px-8 bg-gradient-to-t from-white/90 via-white/50 to-transparent pt-16">
              <p className="text-[17px] text-[#6e6e73] leading-relaxed">
                <span className="font-semibold text-[#1d1d1f]">Cushions.</span> Crafted with acoustically engineered
                high-density memory foam and a custom-designed breathable weave textile, the cloud-like softness of the
                Auralis ear cushions gently creates an airtight acoustic seal that is the foundation of pristine sound.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative flex-1 h-full rounded-3xl overflow-hidden bg-white shadow-xs">
            <Image
              src="/airpods-cups.jpg"
              alt="Auralis Anodized Aluminum Acoustic Cups"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 pb-12 px-8 bg-gradient-to-t from-white/90 via-white/50 to-transparent pt-16">
              <p className="text-[17px] text-[#6e6e73] leading-relaxed">
                <span className="font-semibold text-[#1d1d1f]">Acoustic Cups.</span> The beautifully anodized aerospace-grade
                aluminum earcups feature a revolutionary independent suspension mechanism that allows each cup to pivot
                fluidly and balance acoustic pressure across your head.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Telescoping Arms Section */}
      <section className="relative h-screen flex items-center justify-center bg-[#f5f5f7] snap-start snap-always overflow-hidden">
        <Image src="/telescoping-arms.png" alt="Auralis Max Telescoping Arms" fill className="object-cover" priority />
        <div className="absolute bottom-0 left-0 right-0 pb-24 text-center z-10 px-8">
          <p className="text-[21px] text-white leading-relaxed max-w-3xl mx-auto drop-shadow-sm">
            <span className="font-semibold text-white">Telescoping arms.</span> The telescoping arms smoothly extend
            from the polished stainless steel canopy — staying firmly and precisely where you set them for a customized,
            fatigue-free fit.
          </p>
        </div>
      </section>

      {/* Smart Case Section */}
      <section className="relative h-screen flex items-center justify-center bg-[#f5f5f7] snap-start snap-always overflow-hidden">
        <Image src="/images/image.png" alt="Auralis Max Smart Travel Case" fill className="object-cover" priority />
        <div className="absolute bottom-0 left-0 right-0 pb-24 text-center z-10 px-8">
          <p className="text-[21px] text-[#6e6e73] leading-relaxed max-w-3xl mx-auto">
            <span className="font-semibold text-[#1d1d1f]">Smart Case.</span> When stored in their tailored, ultra-slim
            Smart Case, Auralis Max instantly enters a deep ultra‑low‑power preservation state that protects battery charge
            for months between sessions.
          </p>
        </div>
      </section>

      {/* Brand Footer Ribbon */}
      <footer className="bg-white border-t border-black/10 py-10 px-6 snap-start">
        <div className="max-w-[1040px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-[#86868b]">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center h-5 w-5 rounded-full bg-[#1d1d1f] text-white">
              <Headphones className="h-3 w-3" />
            </div>
            <span className="font-semibold uppercase tracking-wider text-[#1d1d1f]">Auralis Audio Systems</span>
            <span>&copy; {new Date().getFullYear()} All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[#1d1d1f] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#1d1d1f] transition-colors">Terms of Sale</a>
            <a href="#" className="hover:text-[#1d1d1f] transition-colors">Acoustic Warranty</a>
            <a href="#" className="hover:text-[#1d1d1f] transition-colors">Audio Labs</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
