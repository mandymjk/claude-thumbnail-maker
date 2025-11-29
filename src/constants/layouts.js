export const LAYOUTS = [
  {
    id: 'single',
    name: '1장',
    slots: 1,
    canvasWidth: 1200,
    canvasHeight: 630,
    positions: [
      { x: 0, y: 0, width: 1200, height: 630 }
    ]
  },
  {
    id: 'two-horizontal',
    name: '2장 가로',
    slots: 2,
    canvasWidth: 1200,
    canvasHeight: 630,
    positions: [
      { x: 0, y: 0, width: 600, height: 630 },
      { x: 600, y: 0, width: 600, height: 630 }
    ]
  },
  {
    id: 'two-vertical',
    name: '2장 세로',
    slots: 2,
    canvasWidth: 1200,
    canvasHeight: 630,
    positions: [
      { x: 0, y: 0, width: 1200, height: 315 },
      { x: 0, y: 315, width: 1200, height: 315 }
    ]
  },
  {
    id: 'three-horizontal',
    name: '3장 가로',
    slots: 3,
    canvasWidth: 1200,
    canvasHeight: 630,
    positions: [
      { x: 0, y: 0, width: 400, height: 630 },
      { x: 400, y: 0, width: 400, height: 630 },
      { x: 800, y: 0, width: 400, height: 630 }
    ]
  },
  {
    id: 'three-grid',
    name: '3장 그리드',
    slots: 3,
    canvasWidth: 1200,
    canvasHeight: 630,
    positions: [
      { x: 0, y: 0, width: 600, height: 630 },
      { x: 600, y: 0, width: 600, height: 315 },
      { x: 600, y: 315, width: 600, height: 315 }
    ]
  },
  {
    id: 'four-grid',
    name: '4장 그리드',
    slots: 4,
    canvasWidth: 1200,
    canvasHeight: 630,
    positions: [
      { x: 0, y: 0, width: 600, height: 315 },
      { x: 600, y: 0, width: 600, height: 315 },
      { x: 0, y: 315, width: 600, height: 315 },
      { x: 600, y: 315, width: 600, height: 315 }
    ]
  }
]
