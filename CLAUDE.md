# CLAUDE.md

# Portfolio Website Development Guidelines

## Project Goal

เป้าหมายของโปรเจกต์นี้คือสร้าง Portfolio Website ระดับ Professional ที่มีคุณภาพเทียบเท่าเว็บไซต์บน Awwwards และสามารถใช้เป็น Portfolio สำหรับสมัครงานและรับงาน Freelance

เว็บไซต์ต้องมีจุดเด่นดังนี้

- Modern UI
- Premium Design
- Smooth Animation
- Responsive
- Fast Loading
- SEO Friendly
- Production Ready
- Deploy บน GitHub Pages

---

# Tech Stack

Framework

- React
- Next.js
- TypeScript

Styling

- TailwindCSS

Animation

- Framer Motion
- GSAP

3D

- Three.js
- React Three Fiber
- Drei

Utilities

- clsx
- tailwind-merge

Deployment

- GitHub Pages
- GitHub Actions

---

# Development Philosophy

ทุกโค้ดที่เขียนต้องสามารถนำไปใช้ใน Production ได้

ห้ามเขียนโค้ดแบบ Temporary

ห้ามเขียน Hardcode หากสามารถทำเป็น Component หรือ Config ได้

ทุก Component ต้องสามารถ Reuse ได้

โครงสร้างโค้ดต้องอ่านง่ายและรองรับการขยายในอนาคต

ทุก Feature ต้องคำนึงถึง

- Performance
- Accessibility
- SEO
- Responsive
- Maintainability

---

# Before Every Task

ก่อนเริ่มทำงานทุกครั้ง ให้อ่านไฟล์ต่อไปนี้

- Vision.md
- Goals.md
- Roadmap.md
- Todo.md
- Architecture.md
- Folder Structure.md
- Design System.md

หากพบว่าข้อมูลใน Obsidian ขัดแย้งกัน ให้แจ้งก่อนลงมือแก้ไข

---

# Coding Standards

## General

ใช้ TypeScript Strict Mode

หลีกเลี่ยง Any

ตั้งชื่อ Component ให้สื่อความหมาย

แยก Logic ออกจาก UI

แยก Constant

แยก Types

แยก Hooks

---

## React

ใช้ Functional Component

ใช้ React Hooks

หลีกเลี่ยงการ Render ซ้ำโดยไม่จำเป็น

Lazy Load Component ที่มีขนาดใหญ่

ใช้ Dynamic Import หากเหมาะสม

---

## Tailwind

ห้ามใช้ Inline Style หากไม่จำเป็น

Class ต้องเรียงลำดับให้อ่านง่าย

Component ที่ใช้ซ้ำให้สร้าง Variant

---

## Animation

Animation ต้องลื่น

60 FPS

Respect prefers-reduced-motion

ไม่ทำ Animation ที่กิน CPU

Animation ต้องช่วย UX ไม่ใช่รบกวน UX

---

## Responsive

รองรับ

- Mobile
- Tablet
- Laptop
- Desktop
- Ultra Wide

---

## Performance

ทุก Feature ต้องคิดถึง

- Bundle Size
- Lazy Loading
- Image Optimization
- Font Optimization
- Code Splitting

เป้าหมาย Lighthouse

Performance ≥ 95

Accessibility ≥ 95

SEO ≥ 95

Best Practices ≥ 95

---

# UI Principles

Theme

Dark

Style

Modern

Minimal

Premium

Glassmorphism

Gradient

3D Elements

Smooth Motion

ห้ามใช้สีหรือองค์ประกอบที่ขัดกับ Design System

---

# Folder Rules

ห้ามสร้างไฟล์มั่ว

ห้ามสร้างโฟลเดอร์ใหม่โดยไม่มีเหตุผล

ใช้โครงสร้างเดิมของโปรเจกต์

หากจำเป็นต้องเพิ่มโครงสร้างใหม่

ให้อธิบายเหตุผลก่อน

---

# Git Rules

Commit ต้องสื่อความหมาย

ตัวอย่าง

feat: add hero section animation

fix: optimize image loading

refactor: simplify navbar component

style: improve responsive spacing

---

# Refactoring

หากพบโค้ดที่สามารถปรับปรุงได้

ให้ Refactor พร้อมอธิบายเหตุผล

แต่ห้ามเปลี่ยนพฤติกรรมของระบบ

---

# Documentation

ทุก Feature ใหม่

ต้องอัปเดต Documentation ใน Obsidian

ห้ามปล่อย Documentation ล้าหลัง

---

# Obsidian Update

เมื่อทำงานเสร็จทุกครั้ง

ต้องอัปเดต

- Todo.md
- Done.md
- Changelog.md
- Bugs.md (หากมี)
- Roadmap.md (หาก Milestone เปลี่ยน)
- Components.md (หากมี Component ใหม่)

---

# End of Task Report

หลังทำงานเสร็จทุกครั้ง ต้องสรุปตามรูปแบบนี้

## ✅ Completed

- สิ่งที่ทำเสร็จ

---

## 📂 Files Changed

- รายชื่อไฟล์ที่ถูกแก้ไข
- รายชื่อไฟล์ใหม่
- รายชื่อไฟล์ที่ถูกลบ (ถ้ามี)

---

## 🧪 Manual Testing

อธิบายขั้นตอนที่ผู้ใช้ต้องทดสอบเอง

เช่น

- เปิดหน้า Home
- ตรวจ Hero Animation
- Resize Browser
- ตรวจ Responsive
- ตรวจ Dark Theme
- ตรวจ Lighthouse

---

## ⚠ Remaining Issues

สิ่งที่ยังไม่เสร็จ

Bug ที่พบ

สิ่งที่ควรทำต่อ

---

## 📌 Next Recommended Task

เสนอ Task ถัดไปที่เหมาะสมที่สุด

เรียงตามลำดับความสำคัญ

---

# Decision Making

หากมีหลายแนวทาง

ให้เลือกแนวทางที่

- Maintainable มากที่สุด
- Performance ดีที่สุด
- Production Ready
- Industry Standard
- Scale ได้ในอนาคต

---

# Communication

หาก Requirement ไม่ชัดเจน

ให้ถามก่อน

ห้ามเดา Requirement

ห้ามลบโค้ดโดยไม่มีเหตุผล

ห้ามเปลี่ยน Design โดยพลการ

---

# Final Rule

เป้าหมายไม่ใช่เพียง "ให้เว็บใช้งานได้"

แต่ต้องเป็น Portfolio Website ที่มีคุณภาพระดับ Senior Front-end Developer สามารถใช้เป็นผลงานจริง และขยายต่อได้ในอนาคตโดยไม่ต้องรื้อระบบใหม่