export default function Home() {
  const deployTime = new Date().toISOString();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8">IPFS + IPNS Test</h1>

        <div className="bg-gray-100 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Updated Deployment Info | Same link
          </h2>
          <p>
            <strong>Deployed at:</strong> {deployTime}
          </p>
          <p>
            <strong>Build ID:</strong>{" "}
            {process.env.NEXT_PUBLIC_BUILD_ID || "local build"}
          </p>
        </div>

        <div className="mt-8">
          <p>This page was deployed to IPFS and is accessible via IPNS.</p>
          <p>
            Each new deployment updates the IPNS record to point to the latest
            version.
          </p>
        </div>
      </div>
    </main>
  );
}
