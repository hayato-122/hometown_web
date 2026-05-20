import type { Metadata } from "next";
import Image from "next/image";

import { AppBreadcrumbs } from "@/components/AppBreadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { imageData } from "@/data/ImageData";
import type { ImageContent } from "@/types/imageData";

type LicenseInfo = {
  label: string;
  url: string;
};

const licenseDetails = {
  ccBySa40: {
    label: "CC BY-SA 4.0",
    url: "https://creativecommons.org/licenses/by-sa/4.0/deed.ja",
  },
  ccBy40: {
    label: "CC BY 4.0",
    url: "https://creativecommons.org/licenses/by/4.0/deed.ja",
  },
  ccBy30: {
    label: "CC BY 3.0",
    url: "https://creativecommons.org/licenses/by/3.0/deed.ja",
  },
  ccBy25: {
    label: "CC BY 2.5",
    url: "https://creativecommons.org/licenses/by/2.5/deed.ja",
  },
  ccBy20: {
    label: "CC BY 2.0",
    url: "https://creativecommons.org/licenses/by/2.0/deed.ja",
  },
  ccBySa20: {
    label: "CC BY-SA 2.0",
    url: "https://creativecommons.org/licenses/by-sa/2.0/deed.ja",
  },
  ccBySa25: {
    label: "CC BY-SA 2.5",
    url: "https://creativecommons.org/licenses/by-sa/2.5/deed.ja",
  },
  ccBySa30: {
    label: "CC BY-SA 3.0",
    url: "https://creativecommons.org/licenses/by-sa/3.0/deed.ja",
  },
  cc0: {
    label: "CC0 1.0",
    url: "https://creativecommons.org/publicdomain/zero/1.0/deed.ja",
  },
  public: {
    label: "Public domain",
    url: "https://commons.wikimedia.org/wiki/Commons:Public_domain",
  },
} satisfies Record<ImageContent["licenseKey"], LicenseInfo>;

const licenseOrder = Object.keys(licenseDetails) as ImageContent["licenseKey"][];

const licenseSummary = licenseOrder
  .map((licenseKey) => ({
    licenseKey,
    count: imageData.filter((image) => image.licenseKey === licenseKey).length,
  }))
  .filter((license) => license.count > 0);

const sourceCount = new Set(imageData.map((image) => image.sourceName)).size;

export const metadata: Metadata = {
  title: "クレジット | 明石ガイド",
  description: "明石ガイドで使用している画像の出典とライセンス一覧",
};

export default function CreditsPage() {
  return (
    <section className="space-y-8">
      <div className="border-b border-border pb-6">
        <AppBreadcrumbs
          items={[
            { label: "地元紹介ページ", href: "/" },
            { label: "クレジット" },
          ]}
        />

        <div className="mt-4 max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.16em] text-primary">
            CREDITS
          </p>
          <h1 className="mt-3 font-heading text-4xl font-semibold tracking-[-0.03em] text-foreground">
            画像クレジット
          </h1>
          <p className="mt-3 text-base leading-7 text-muted-foreground">
            明石ガイドで使用している画像のタイトル、作者、出典、ライセンス、加工内容を掲載しています。
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-card shadow-panel ring-1 ring-border/80">
          <CardContent className="px-6 py-5">
            <p className="text-xs font-semibold tracking-[0.16em] text-primary">
              IMAGES
            </p>
            <p className="mt-3 font-heading text-3xl font-semibold text-foreground">
              {imageData.length}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">掲載画像数</p>
          </CardContent>
        </Card>

        <Card className="bg-card shadow-panel ring-1 ring-border/80">
          <CardContent className="px-6 py-5">
            <p className="text-xs font-semibold tracking-[0.16em] text-primary">
              SOURCES
            </p>
            <p className="mt-3 font-heading text-3xl font-semibold text-foreground">
              {sourceCount}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">出典種別</p>
          </CardContent>
        </Card>

        <Card className="bg-card shadow-panel ring-1 ring-border/80">
          <CardContent className="px-6 py-5">
            <p className="text-xs font-semibold tracking-[0.16em] text-primary">
              LICENSES
            </p>
            <p className="mt-3 font-heading text-3xl font-semibold text-foreground">
              {licenseSummary.length}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              使用ライセンス種別
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="rounded-3xl bg-card shadow-panel ring-1 ring-border/80">
        <div className="border-b border-border px-5 py-4 md:px-6">
          <h2 className="font-heading text-2xl font-semibold tracking-[-0.02em] text-foreground">
            ライセンス内訳
          </h2>
        </div>
        <div className="grid gap-2 p-4 sm:grid-cols-2 lg:grid-cols-5">
          {licenseSummary.map(({ licenseKey, count }) => {
            const license = licenseDetails[licenseKey];

            return (
              <a
                key={licenseKey}
                href={license.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-secondary px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring focus-visible:outline-none"
              >
                <span>{license.label}</span>
                <span className="ml-2 text-muted-foreground">{count} 件</span>
              </a>
            );
          })}
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl bg-card shadow-panel ring-1 ring-border/80">
        <div className="border-b border-border px-5 py-4 md:px-6">
          <h2 className="font-heading text-2xl font-semibold tracking-[-0.02em] text-foreground">
            使用画像一覧
          </h2>
        </div>

        <div className="hidden overflow-x-auto lg:block">
          <table className="w-full min-w-[1040px] text-left text-sm">
            <thead className="bg-secondary text-xs font-semibold tracking-[0.08em] text-muted-foreground">
              <tr>
                <th scope="col" className="w-[112px] px-5 py-4">
                  画像
                </th>
                <th scope="col" className="px-5 py-4">
                  タイトル
                </th>
                <th scope="col" className="px-5 py-4">
                  作者
                </th>
                <th scope="col" className="px-5 py-4">
                  使用箇所
                </th>
                <th scope="col" className="px-5 py-4">
                  出典
                </th>
                <th scope="col" className="px-5 py-4">
                  ライセンス
                </th>
                <th scope="col" className="px-5 py-4">
                  加工
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {imageData.map((image) => {
                const license = licenseDetails[image.licenseKey];

                return (
                  <tr key={image.id} className="align-top transition hover:bg-muted/40">
                    <td className="px-5 py-4">
                      <Image
                        src={image.localPath}
                        alt=""
                        width={96}
                        height={64}
                        className="h-14 w-20 rounded-xl bg-secondary object-cover"
                      />
                    </td>
                    <td className="px-5 py-4">
                      <a
                        href={image.sourceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold leading-6 text-foreground underline-offset-4 hover:underline"
                      >
                        {image.title}
                      </a>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {image.id}
                      </p>
                    </td>
                    <td className="px-5 py-4 text-foreground">{image.author}</td>
                    <td className="px-5 py-4">
                      <div className="flex max-w-[220px] flex-wrap gap-1.5">
                        {image.usedOn.map((usedOn) => (
                          <span
                            key={usedOn}
                            className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground"
                          >
                            {usedOn}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <a
                        href={image.sourceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold text-primary underline-offset-4 hover:underline"
                      >
                        {image.sourceName}
                      </a>
                    </td>
                    <td className="px-5 py-4">
                      <a
                        href={license.url}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold text-foreground underline-offset-4 hover:underline"
                      >
                        {license.label}
                      </a>
                    </td>
                    <td className="px-5 py-4 text-muted-foreground">
                      {image.changes}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="grid gap-4 p-4 lg:hidden">
          {imageData.map((image) => {
            const license = licenseDetails[image.licenseKey];

            return (
              <article
                key={image.id}
                className="rounded-2xl bg-background p-4 shadow-panel ring-1 ring-border/80"
              >
                <div className="flex gap-4">
                  <Image
                    src={image.localPath}
                    alt=""
                    width={96}
                    height={64}
                    className="h-16 w-24 shrink-0 rounded-xl bg-secondary object-cover"
                  />
                  <div className="min-w-0">
                    <a
                      href={image.sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold leading-6 text-foreground underline-offset-4 hover:underline"
                    >
                      {image.title}
                    </a>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {image.id}
                    </p>
                  </div>
                </div>

                <dl className="mt-4 grid gap-3 text-sm">
                  <div>
                    <dt className="text-xs font-semibold text-muted-foreground">
                      作者
                    </dt>
                    <dd className="mt-1 text-foreground">{image.author}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold text-muted-foreground">
                      出典
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={image.sourceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold text-primary underline-offset-4 hover:underline"
                      >
                        {image.sourceName}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold text-muted-foreground">
                      ライセンス
                    </dt>
                    <dd className="mt-1">
                      <a
                        href={license.url}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold text-foreground underline-offset-4 hover:underline"
                      >
                        {license.label}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold text-muted-foreground">
                      使用箇所
                    </dt>
                    <dd className="mt-2 flex flex-wrap gap-1.5">
                      {image.usedOn.map((usedOn) => (
                        <span
                          key={usedOn}
                          className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground"
                        >
                          {usedOn}
                        </span>
                      ))}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold text-muted-foreground">
                      加工
                    </dt>
                    <dd className="mt-1 text-foreground">{image.changes}</dd>
                  </div>
                </dl>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
