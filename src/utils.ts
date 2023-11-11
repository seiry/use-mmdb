export async function fetchFileAsBuffer(fileUrl: string) {
  try {
    const response = await fetch(fileUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const arrayBuffer = await response.arrayBuffer();
    // 例如，创建一个 Uint8Array 视图
    const uint8View = new Uint8Array(arrayBuffer);
    const buf = Buffer.from(uint8View);
    return buf;
  } catch (error) {
    console.error('Fetching file failed:', error);
  }
}
