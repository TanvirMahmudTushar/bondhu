"use client"

import { useEffect, useRef } from "react"

interface Ball {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
  mass: number
}

const BALL_COLORS = [
  "#f59e0b", // yellow (1)
  "#3b82f6", // blue (2)
  "#ef4444", // red (3)
  "#7c3aed", // purple (4)
  "#f97316", // orange (5)
  "#10b981", // green (6)
  "#dc2626", // dark red (7)
  "#1e1e1e", // black (8)
  "#f59e0b", // yellow stripe (9)
  "#3b82f6", // blue stripe (10)
  "#ef4444", // red stripe (11)
  "#7c3aed", // purple stripe (12)
  "#f97316", // orange stripe (13)
  "#10b981", // green stripe (14)
  "#dc2626", // dark red stripe (15)
]

const FRICTION = 0.995
const RESTITUTION = 0.9
const BALL_RADIUS = 14
const NUM_BALLS = 15
const CUE_POWER = 12

export function PoolBallsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const ballsRef = useRef<Ball[]>([])
  const mouseRef = useRef({ x: 0, y: 0, down: false, startX: 0, startY: 0 })
  const animFrameRef = useRef<number>(0)
  const cueLineRef = useRef<{ fromX: number; fromY: number; toX: number; toY: number } | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    function resize() {
      canvas!.width = window.innerWidth
      canvas!.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    // Initialize balls in a triangle rack formation
    function initBalls() {
      const balls: Ball[] = []
      const cx = canvas!.width * 0.6
      const cy = canvas!.height * 0.5
      const spacing = BALL_RADIUS * 2.2
      let colorIdx = 0

      for (let row = 0; row < 5; row++) {
        for (let col = 0; col <= row; col++) {
          if (colorIdx >= NUM_BALLS) break
          balls.push({
            x: cx + row * spacing * Math.cos(Math.PI / 6),
            y: cy + (col - row / 2) * spacing,
            vx: 0,
            vy: 0,
            radius: BALL_RADIUS,
            color: BALL_COLORS[colorIdx],
            mass: 1,
          })
          colorIdx++
        }
      }

      // Cue ball (white)
      balls.push({
        x: canvas!.width * 0.25,
        y: canvas!.height * 0.5,
        vx: 0,
        vy: 0,
        radius: BALL_RADIUS,
        color: "#ffffff",
        mass: 1,
      })

      ballsRef.current = balls
    }

    initBalls()

    // Mouse events
    function onMouseDown(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect()
      const mx = e.clientX - rect.left
      const my = e.clientY - rect.top
      mouseRef.current.down = true
      mouseRef.current.startX = mx
      mouseRef.current.startY = my
      mouseRef.current.x = mx
      mouseRef.current.y = my
    }

    function onMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect()
      mouseRef.current.x = e.clientX - rect.left
      mouseRef.current.y = e.clientY - rect.top

      if (mouseRef.current.down) {
        // Find nearest ball to start position
        const nearest = findNearestBall(mouseRef.current.startX, mouseRef.current.startY)
        if (nearest) {
          cueLineRef.current = {
            fromX: mouseRef.current.x,
            fromY: mouseRef.current.y,
            toX: nearest.x,
            toY: nearest.y,
          }
        }
      }
    }

    function onMouseUp(_e: MouseEvent) {
      if (mouseRef.current.down) {
        const nearest = findNearestBall(mouseRef.current.startX, mouseRef.current.startY)
        if (nearest) {
          const dx = nearest.x - mouseRef.current.x
          const dy = nearest.y - mouseRef.current.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist > 5) {
            const power = Math.min(dist / 30, CUE_POWER)
            nearest.vx += (dx / dist) * power
            nearest.vy += (dy / dist) * power
          }
        }
      }
      mouseRef.current.down = false
      cueLineRef.current = null
    }

    function onTouchStart(e: TouchEvent) {
      e.preventDefault()
      const touch = e.touches[0]
      const rect = canvas!.getBoundingClientRect()
      const mx = touch.clientX - rect.left
      const my = touch.clientY - rect.top
      mouseRef.current.down = true
      mouseRef.current.startX = mx
      mouseRef.current.startY = my
      mouseRef.current.x = mx
      mouseRef.current.y = my
    }

    function onTouchMove(e: TouchEvent) {
      e.preventDefault()
      const touch = e.touches[0]
      const rect = canvas!.getBoundingClientRect()
      mouseRef.current.x = touch.clientX - rect.left
      mouseRef.current.y = touch.clientY - rect.top

      if (mouseRef.current.down) {
        const nearest = findNearestBall(mouseRef.current.startX, mouseRef.current.startY)
        if (nearest) {
          cueLineRef.current = {
            fromX: mouseRef.current.x,
            fromY: mouseRef.current.y,
            toX: nearest.x,
            toY: nearest.y,
          }
        }
      }
    }

    function onTouchEnd(e: TouchEvent) {
      e.preventDefault()
      onMouseUp(new MouseEvent("mouseup"))
    }

    function findNearestBall(x: number, y: number): Ball | null {
      let closest: Ball | null = null
      let minDist = 80 // max distance to grab a ball
      for (const ball of ballsRef.current) {
        const dx = ball.x - x
        const dy = ball.y - y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < minDist) {
          minDist = dist
          closest = ball
        }
      }
      return closest
    }

    canvas.addEventListener("mousedown", onMouseDown)
    canvas.addEventListener("mousemove", onMouseMove)
    canvas.addEventListener("mouseup", onMouseUp)
    canvas.addEventListener("mouseleave", onMouseUp)
    canvas.addEventListener("touchstart", onTouchStart, { passive: false })
    canvas.addEventListener("touchmove", onTouchMove, { passive: false })
    canvas.addEventListener("touchend", onTouchEnd, { passive: false })

    // Physics & rendering loop
    function update() {
      const balls = ballsRef.current
      const w = canvas!.width
      const h = canvas!.height

      for (const ball of balls) {
        // Apply velocity
        ball.x += ball.vx
        ball.y += ball.vy

        // Friction
        ball.vx *= FRICTION
        ball.vy *= FRICTION

        // Stop tiny movements
        if (Math.abs(ball.vx) < 0.01) ball.vx = 0
        if (Math.abs(ball.vy) < 0.01) ball.vy = 0

        // Wall collisions
        if (ball.x - ball.radius < 0) {
          ball.x = ball.radius
          ball.vx = Math.abs(ball.vx) * RESTITUTION
        }
        if (ball.x + ball.radius > w) {
          ball.x = w - ball.radius
          ball.vx = -Math.abs(ball.vx) * RESTITUTION
        }
        if (ball.y - ball.radius < 0) {
          ball.y = ball.radius
          ball.vy = Math.abs(ball.vy) * RESTITUTION
        }
        if (ball.y + ball.radius > h) {
          ball.y = h - ball.radius
          ball.vy = -Math.abs(ball.vy) * RESTITUTION
        }
      }

      // Ball-to-ball collisions
      for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {
          const a = balls[i]
          const b = balls[j]
          const dx = b.x - a.x
          const dy = b.y - a.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const minDist = a.radius + b.radius

          if (dist < minDist && dist > 0) {
            // Separate overlapping balls
            const overlap = minDist - dist
            const nx = dx / dist
            const ny = dy / dist
            a.x -= (nx * overlap) / 2
            a.y -= (ny * overlap) / 2
            b.x += (nx * overlap) / 2
            b.y += (ny * overlap) / 2

            // Elastic collision response
            const dvx = a.vx - b.vx
            const dvy = a.vy - b.vy
            const dotProduct = dvx * nx + dvy * ny

            if (dotProduct > 0) {
              const impulse = (2 * dotProduct) / (a.mass + b.mass)
              a.vx -= impulse * b.mass * nx * RESTITUTION
              a.vy -= impulse * b.mass * ny * RESTITUTION
              b.vx += impulse * a.mass * nx * RESTITUTION
              b.vy += impulse * a.mass * ny * RESTITUTION
            }
          }
        }
      }
    }

    function draw() {
      if (!ctx) return
      const w = canvas!.width
      const h = canvas!.height

      // Clear
      ctx.clearRect(0, 0, w, h)

      // Draw cue line
      if (cueLineRef.current) {
        const cue = cueLineRef.current
        ctx.beginPath()
        ctx.moveTo(cue.fromX, cue.fromY)
        ctx.lineTo(cue.toX, cue.toY)
        ctx.strokeStyle = "rgba(255, 255, 255, 0.5)"
        ctx.lineWidth = 2
        ctx.setLineDash([6, 4])
        ctx.stroke()
        ctx.setLineDash([])

        // Draw cue stick
        const dx = cue.fromX - cue.toX
        const dy = cue.fromY - cue.toY
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist > 0) {
          const nx = dx / dist
          const ny = dy / dist
          const stickLen = 200
          ctx.beginPath()
          ctx.moveTo(cue.fromX, cue.fromY)
          ctx.lineTo(cue.fromX + nx * stickLen, cue.fromY + ny * stickLen)
          ctx.strokeStyle = "rgba(139, 90, 43, 0.8)"
          ctx.lineWidth = 4
          ctx.lineCap = "round"
          ctx.stroke()

          // Stick tip
          ctx.beginPath()
          ctx.arc(cue.fromX, cue.fromY, 3, 0, Math.PI * 2)
          ctx.fillStyle = "rgba(200, 200, 200, 0.9)"
          ctx.fill()
        }

        // Power indicator
        const power = Math.min(dist / 30, CUE_POWER)
        const powerPct = power / CUE_POWER
        const barY = cue.toY - BALL_RADIUS - 20
        ctx.fillStyle = `rgba(${Math.round(255 * powerPct)}, ${Math.round(255 * (1 - powerPct))}, 0, 0.7)`
        ctx.fillRect(cue.toX - 20, barY, 40 * powerPct, 4)
        ctx.strokeStyle = "rgba(255, 255, 255, 0.3)"
        ctx.lineWidth = 1
        ctx.strokeRect(cue.toX - 20, barY, 40, 4)
      }

      // Draw balls
      for (const ball of ballsRef.current) {
        // Shadow
        ctx.beginPath()
        ctx.arc(ball.x + 2, ball.y + 2, ball.radius, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(0, 0, 0, 0.3)"
        ctx.fill()

        // Ball body
        ctx.beginPath()
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2)
        const gradient = ctx.createRadialGradient(
          ball.x - ball.radius * 0.3,
          ball.y - ball.radius * 0.3,
          ball.radius * 0.1,
          ball.x,
          ball.y,
          ball.radius
        )
        gradient.addColorStop(0, lighten(ball.color, 40))
        gradient.addColorStop(0.7, ball.color)
        gradient.addColorStop(1, darken(ball.color, 30))
        ctx.fillStyle = gradient
        ctx.fill()

        // Glossy highlight
        ctx.beginPath()
        ctx.arc(
          ball.x - ball.radius * 0.25,
          ball.y - ball.radius * 0.25,
          ball.radius * 0.35,
          0,
          Math.PI * 2
        )
        ctx.fillStyle = "rgba(255, 255, 255, 0.25)"
        ctx.fill()
      }
    }

    function lighten(hex: string, percent: number): string {
      const num = parseInt(hex.replace("#", ""), 16)
      const r = Math.min(255, ((num >> 16) & 0xff) + percent)
      const g = Math.min(255, ((num >> 8) & 0xff) + percent)
      const b = Math.min(255, (num & 0xff) + percent)
      return `rgb(${r}, ${g}, ${b})`
    }

    function darken(hex: string, percent: number): string {
      const num = parseInt(hex.replace("#", ""), 16)
      const r = Math.max(0, ((num >> 16) & 0xff) - percent)
      const g = Math.max(0, ((num >> 8) & 0xff) - percent)
      const b = Math.max(0, (num & 0xff) - percent)
      return `rgb(${r}, ${g}, ${b})`
    }

    function loop() {
      update()
      draw()
      animFrameRef.current = requestAnimationFrame(loop)
    }

    loop()

    return () => {
      window.removeEventListener("resize", resize)
      canvas.removeEventListener("mousedown", onMouseDown)
      canvas.removeEventListener("mousemove", onMouseMove)
      canvas.removeEventListener("mouseup", onMouseUp)
      canvas.removeEventListener("mouseleave", onMouseUp)
      canvas.removeEventListener("touchstart", onTouchStart)
      canvas.removeEventListener("touchmove", onTouchMove)
      canvas.removeEventListener("touchend", onTouchEnd)
      cancelAnimationFrame(animFrameRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-auto fixed inset-0 z-0"
      style={{ touchAction: "none" }}
    />
  )
}
