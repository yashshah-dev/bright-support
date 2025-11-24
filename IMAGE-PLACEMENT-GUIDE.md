# Image Placement Guide - Bright Support Website

## 🎯 Overview

Images have been strategically placed throughout the website to enhance user engagement, build trust, and create emotional connections. All image placements follow UX best practices and blend seamlessly with the elegant indigo/purple/amber theme.

---

## 📍 Image Locations & Implementation

### **1. Homepage (`/src/app/page.tsx`)**

#### Hero Section
- **File**: `/public/images/hero/hero-main.webp`
- **Size**: 1200x800px (landscape)
- **Location**: Right side of hero section (2-column grid on desktop)
- **Purpose**: Immediate trust-building, shows care in action
- **Implementation**: Next.js Image component with `priority` flag for LCP optimization
- **Responsive**: Displays above text on mobile, beside text on desktop

#### Services Cards (6 images)
- **Files**: 
  - `daily-living.webp` - Daily Living Support
  - `nursing.webp` - Community Nursing
  - `physiotherapy.webp` - Physiotherapy
  - `community-participation.webp` - Community Participation
  - `companionship.webp` - Companionship
  - `transport.webp` - Transport Services
- **Size**: 600x400px each (aspect-video ratio)
- **Location**: ServiceCard component top section
- **Purpose**: Make services tangible and relatable
- **Fallback**: Icons displayed if image not available

#### Our Goal Section
- **File**: `/public/images/general/services-in-action.webp`
- **Size**: 800x1000px (portrait)
- **Location**: Right side of 2-column layout
- **Purpose**: Show real-world service application
- **Context**: Pairs with value proposition cards

---

### **2. About Us Page (`/src/app/about-us/page.tsx`)**

#### Team Photo
- **File**: `/public/images/about/team-photo.webp`
- **Size**: 1400x600px (wide landscape)
- **Location**: Between hero and "Our Story" section
- **Purpose**: Humanize brand, show team authenticity
- **Styling**: Full-width container, elegant rounded corners

#### Community Impact
- **File**: `/public/images/about/community-impact.webp`
- **Size**: 1400x600px (wide landscape)
- **Location**: New section after "Core Values", before "Service Areas"
- **Purpose**: Demonstrate community integration and social impact
- **Context**: Shows participants actively engaged in community activities

---

### **3. Career Page (`/src/app/career/page.tsx`)**

#### Team Culture
- **File**: `/public/images/career/team-culture.webp`
- **Size**: 1200x700px (landscape)
- **Location**: New section after career mission, before criteria
- **Purpose**: Attract candidates with positive workplace culture
- **Context**: Shows professional development and collaboration

---

### **4. Contact Page (`/src/app/contact-us/page.tsx`)**

#### Office Welcome
- **File**: `/public/images/contact/office-welcome.webp`
- **Size**: 800x500px (landscape)
- **Location**: Above contact info and form (full-width)
- **Purpose**: Make contact feel welcoming and accessible
- **Context**: Shows inviting reception area

---

### **5. Our Services Page (`/src/app/our-services/page.tsx`)**

#### Service Cards (Same as homepage)
- Uses same 6 service images plus icons for other services
- **Location**: Services grid section
- **Purpose**: Visual consistency across service representations

---

## 🎨 Design Integration

### Color Harmony
All images should feature or be processed with:
- **Primary**: Indigo (#6366f1), Purple (#764ba2)
- **Accents**: Amber (#f59e0b), Pink (#ec4899)
- **Neutrals**: Soft whites, light grays, natural tones
- **Technique**: Subtle color grading with gentle gradients

### Visual Style
- **Lighting**: Soft, natural (avoid harsh shadows)
- **Mood**: Warm, professional yet approachable
- **Authenticity**: Genuine expressions, not overly staged
- **Diversity**: Inclusive representation across all images
- **Setting**: Australian healthcare contexts where relevant

### Technical Treatment
- **Corners**: `rounded-3xl` (24px border radius)
- **Shadows**: `shadow-elegant-lg` class
- **Hover Effects**: Subtle scale transforms on interactive elements
- **Loading**: Progressive loading with blur placeholder
- **Optimization**: WebP format, lazy loading (except hero)

---

## 🔧 Technical Implementation

### ServiceCard Component Updates
```typescript
interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;        // Fallback icon
  imageSrc?: string;              // NEW: Optional image
}
```

**Rendering Logic**:
1. If `imageSrc` provided → Display optimized image
2. If no image but `icon` → Display icon
3. If neither → Display placeholder

**Image Treatment**:
- Hover zoom effect: `group-hover:scale-105`
- Smooth transitions: 500ms duration
- Gradient overlay on hover for depth

### Next.js Image Optimization
All images use Next.js `<Image>` component:
- Automatic format optimization (WebP)
- Responsive srcset generation
- Lazy loading (except priority images)
- Built-in blur placeholder

### Performance Considerations
- **Hero image**: `priority` flag for immediate LCP
- **Above fold**: Eager loading
- **Below fold**: Lazy loading (default)
- **Target size**: <200KB per image after optimization

---

## 📊 SEO & Accessibility

### Alt Text Strategy
Every image includes descriptive alt text:
- **What**: Describes the main subject
- **Context**: Explains the setting/activity
- **Purpose**: Relates to page content

Examples:
```
✅ Good: "NDIS support worker providing compassionate care to participant"
❌ Bad: "Image 1" or "Support worker"
```

### Semantic HTML
- Proper heading hierarchy maintained
- Figures with captions where appropriate
- ARIA labels for decorative vs. content images

---

## 📁 File Organization

```
public/images/
├── hero/
│   └── hero-main.webp
├── about/
│   ├── team-photo.webp
│   └── community-impact.webp
├── services/
│   ├── daily-living.webp
│   ├── nursing.webp
│   ├── physiotherapy.webp
│   ├── community-participation.webp
│   ├── companionship.webp
│   └── transport.webp
├── career/
│   └── team-culture.webp
├── contact/
│   └── office-welcome.webp
└── general/
    └── services-in-action.webp
```

---

## ✅ Quality Checklist

Before adding any image, ensure:

- [ ] Matches website color palette (indigo/purple/amber)
- [ ] Appropriate size and aspect ratio
- [ ] Optimized for web (<200KB)
- [ ] WebP format with JPG fallback
- [ ] Descriptive alt text added
- [ ] Natural, authentic expressions
- [ ] Professional quality (no pixelation)
- [ ] Inclusive representation
- [ ] Proper lighting and composition
- [ ] Australian context where relevant

---

## 🎯 User Experience Impact

### Strategic Placement Benefits:

1. **Trust Building**: Real people, real care moments
2. **Emotional Connection**: Authentic interactions shown
3. **Service Clarity**: Visual representation of offerings
4. **Brand Personality**: Warm, professional, caring
5. **Engagement**: Visual breaks in content flow
6. **Conversion**: Reduced bounce rate, increased inquiries

### Psychological Triggers:
- **Social Proof**: Team photos build credibility
- **Relatability**: Diverse representation increases identification
- **Aspiration**: Positive outcomes shown visually
- **Safety**: Professional settings reduce uncertainty
- **Warmth**: Genuine smiles and interactions

---

## 🔄 Future Enhancements

### Phase 2 Opportunities:
1. Add hero image carousel with multiple scenarios
2. Include video testimonials in About section
3. Add before/after success stories (with consent)
4. Create animated transitions between images
5. Implement lazy-load blur effects
6. Add image galleries for community events

### Analytics Integration:
- Track image engagement (scroll depth)
- A/B test different hero images
- Monitor conversion impact
- Analyze heat maps for image interaction

---

## 📞 Support

For questions about image placement or requirements:
- Review AI generation prompts in project docs
- Check Next.js Image documentation
- Ensure all images comply with NDIS marketing guidelines
- Obtain proper consent for participant photos

---

**Status**: ✅ All image placements implemented and tested  
**Last Updated**: November 24, 2025  
**Version**: 1.0
