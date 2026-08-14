function SizeGuidePage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
      <div className="mb-12 max-w-3xl">
        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.32em] text-muted">
          Fit & sizing
        </p>
        <h1 className="font-sans text-4xl font-bold text-charcoal md:text-6xl">
          Size Guide
        </h1>
      </div>

      <div className="space-y-12 max-w-4xl">
        <section>
          <h2 className="mb-6 font-sans text-2xl font-bold text-charcoal">Men's Sizing</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-charcoal">
                  <th className="text-left py-3 px-4 font-semibold text-charcoal">Size</th>
                  <th className="text-left py-3 px-4 font-semibold text-charcoal">XS</th>
                  <th className="text-left py-3 px-4 font-semibold text-charcoal">S</th>
                  <th className="text-left py-3 px-4 font-semibold text-charcoal">M</th>
                  <th className="text-left py-3 px-4 font-semibold text-charcoal">L</th>
                  <th className="text-left py-3 px-4 font-semibold text-charcoal">XL</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-charcoal/15">
                  <td className="py-3 px-4 text-muted">Chest (in)</td>
                  <td className="py-3 px-4">33-35</td>
                  <td className="py-3 px-4">35-37</td>
                  <td className="py-3 px-4">37-40</td>
                  <td className="py-3 px-4">40-43</td>
                  <td className="py-3 px-4">43-46</td>
                </tr>
                <tr className="border-b border-charcoal/15">
                  <td className="py-3 px-4 text-muted">Length (in)</td>
                  <td className="py-3 px-4">27</td>
                  <td className="py-3 px-4">28</td>
                  <td className="py-3 px-4">29</td>
                  <td className="py-3 px-4">30</td>
                  <td className="py-3 px-4">31</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="border-t border-charcoal/15 pt-12">
          <h2 className="mb-6 font-sans text-2xl font-bold text-charcoal">Women's Sizing</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-charcoal">
                  <th className="text-left py-3 px-4 font-semibold text-charcoal">Size</th>
                  <th className="text-left py-3 px-4 font-semibold text-charcoal">XS</th>
                  <th className="text-left py-3 px-4 font-semibold text-charcoal">S</th>
                  <th className="text-left py-3 px-4 font-semibold text-charcoal">M</th>
                  <th className="text-left py-3 px-4 font-semibold text-charcoal">L</th>
                  <th className="text-left py-3 px-4 font-semibold text-charcoal">XL</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-charcoal/15">
                  <td className="py-3 px-4 text-muted">Bust (in)</td>
                  <td className="py-3 px-4">31-33</td>
                  <td className="py-3 px-4">33-35</td>
                  <td className="py-3 px-4">35-38</td>
                  <td className="py-3 px-4">38-41</td>
                  <td className="py-3 px-4">41-44</td>
                </tr>
                <tr className="border-b border-charcoal/15">
                  <td className="py-3 px-4 text-muted">Length (in)</td>
                  <td className="py-3 px-4">25</td>
                  <td className="py-3 px-4">26</td>
                  <td className="py-3 px-4">27</td>
                  <td className="py-3 px-4">28</td>
                  <td className="py-3 px-4">29</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="border-t border-charcoal/15 pt-12">
          <h2 className="mb-4 font-sans text-2xl font-bold text-charcoal">How to Measure</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-charcoal mb-2">Chest / Bust</h3>
              <p className="text-muted">Measure around the fullest part of your chest horizontally, keeping the tape loose and parallel to the ground.</p>
            </div>
            <div>
              <h3 className="font-semibold text-charcoal mb-2">Length</h3>
              <p className="text-muted">Measure from the top of the shoulder down to your desired hem length.</p>
            </div>
          </div>
        </section>

        <section className="border-t border-charcoal/15 pt-12">
          <p className="text-muted">
            Still unsure? <span className="font-semibold text-charcoal">Email us at sizing@rampagecollective.com</span> and we'll help you find your perfect fit.
          </p>
        </section>
      </div>
    </main>
  )
}

export default SizeGuidePage
