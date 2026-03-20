import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { buildServiceMetadata } from "@/lib/metadata";
import { getServiceBySlug } from "@/data/services";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";

export async function generateMetadata(): Promise<Metadata> {
  const service = getServiceBySlug("sewer-pipe-services");
  if (!service) return {};
  return buildServiceMetadata(service);
}

export default function SewerPipeServicesPage() {
  const service = getServiceBySlug("sewer-pipe-services");
  if (!service) return notFound();
  return <ServicePageTemplate service={service} />;
}
