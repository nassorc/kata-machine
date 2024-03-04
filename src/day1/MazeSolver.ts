const dirs = [
  [0, -1],
  [1, 0],
  [0, 1],
  [-1, 0],
]

function drawPath(data: string[], path: Point[]) {
    const data2 = data.map((row) => row.split(''));
    path.forEach((p) => {
        if (data2[p.y] && data2[p.y][p.x]) {
            data2[p.y][p.x] = '*';
        }
    });
    return data2.map(d => d.join(''));
}

function walk(maze: string[], wall: string, cur: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
    if( 
        cur.x < 0 || cur.x >= maze[0].length ||
        cur.y < 0 || cur.y >= maze.length
    ) {
      return false;
    }

    if (maze[cur.y][cur.x] === wall) { 
      return false;
    }

    if (cur.x === end.x && cur.y === end.y) { 
      path.push(cur);
      return true; 
    }

    if (seen[cur.y][cur.x]) {
      return false;
    }

    // pre
    path.push(cur);
    seen[cur.y][cur.x] = true;

    console.log(drawPath(maze, path));

    // recurse
    for (let i = 0; i < dirs.length; ++i) {
      const dir = dirs[i];
      if (walk(maze, wall, {x: cur.x + dir[0], y: cur.y + dir[1]}, end, seen, path)) {
        return true;
      }
    }

    // post
    // in case the path leads no where, we pop off the point
    path.pop();


    return false;
}
export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
  let path: Point[] = [];
  let seen: boolean[][] = [];

  for (let i = 0; i < maze.length; i++) {
    seen.push(new Array(maze[0].length).fill(false));
  }

  walk(maze, wall, start, end, seen, path);

  return path;
}

