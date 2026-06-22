import { motion } from 'framer-motion';
import {
  Award,
  Calendar,
  CheckCircle2,
  Globe,
  GraduationCap,
  Mail,
  Phone,
  Shield,
  ShieldCheck,
  Star,
  Lock,
  BadgeCheck,
} from 'lucide-react';
import './CertificateVerification.css';

const CERTIFICATE = {
  organization: 'CHAPTER CCDI',
  certificateType: 'Internship Completion Certificate',
  msme: 'UDYAM-AP-12-0108690',
  issueDate: '22-Jun-2026',
  email: 'info.chapterccdi@gmail.com',
  mobile: '8500874229 / 9398406794',
};

const DETAILS = [
  {
    icon: GraduationCap,
    label: 'Certificate Type',
    value: CERTIFICATE.certificateType,
  },
  {
    icon: Calendar,
    label: 'Issue Date',
    value: CERTIFICATE.issueDate,
  },
  {
    icon: Mail,
    label: 'Email',
    value: CERTIFICATE.email,
    href: `mailto:${CERTIFICATE.email}`,
  },
  {
    icon: Phone,
    label: 'Mobile',
    value: CERTIFICATE.mobile,
    href: 'tel:8500874229',
  },
  {
    icon: ShieldCheck,
    label: 'MSME Registration',
    value: CERTIFICATE.msme,
  },
];

const TRUST_BADGES = [
  { icon: Shield, title: 'TRUSTED', subtitle: 'Verified Certificate' },
  { icon: Award, title: 'AUTHENTIC', subtitle: '100% Genuine' },
  { icon: Lock, title: 'SECURE', subtitle: 'Data Protection' },
  { icon: BadgeCheck, title: 'RELIABLE', subtitle: 'Instant Verification' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const checkVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: { type: 'spring', stiffness: 260, damping: 18, delay: 0.3 },
  },
};

export default function CertificateVerification() {
  return (
    <div className="verify-page">
      <div className="verify-bg">
        <motion.div
          className="verify-bg-orb verify-bg-orb--one"
          animate={{ y: [0, -18, 0], x: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="verify-bg-orb verify-bg-orb--two"
          animate={{ y: [0, 14, 0], x: [0, -12, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <motion.main
        className="verify-card"
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="verify-tab verify-tab--top">
          <ShieldCheck size={16} />
          <span>Certificate Verification</span>
        </div>

        <motion.header
          className="verify-header"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="verify-logo-wrap" variants={itemVariants}>
            <img
              src={`${import.meta.env.BASE_URL}logo.png`}
              alt="CHAPTER CCDI logo"
              className="verify-logo"
            />
            <div className="verify-brand">
              <span className="verify-brand-name">{CERTIFICATE.organization}</span>
              <span className="verify-brand-tag">Official Verification Portal</span>
            </div>
          </motion.div>

          <motion.div className="verify-status" variants={itemVariants}>
            <motion.div
              className="verify-status-icon"
              variants={checkVariants}
              initial="hidden"
              animate="visible"
            >
              <CheckCircle2 size={34} strokeWidth={2.2} />
            </motion.div>
            <div>
              <h1 className="verify-title">Certificate Verified</h1>
              <p className="verify-subtitle">
                This certificate is authentic and issued by CHAPTER CCDI
              </p>
            </div>
          </motion.div>

          <motion.div className="verify-pill" variants={itemVariants}>
            <Star size={14} fill="currentColor" />
            <span>Certified Intern From</span>
          </motion.div>

          <motion.h2 className="verify-org-title" variants={itemVariants}>
            {CERTIFICATE.organization}
          </motion.h2>
        </motion.header>

        <motion.ul
          className="verify-details"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {DETAILS.map((detail) => {
            const Icon = detail.icon;
            const content = (
              <>
                <span className="verify-detail-label">{detail.label}</span>
                <span className="verify-detail-value">{detail.value}</span>
              </>
            );

            return (
              <motion.li key={detail.label} className="verify-detail" variants={itemVariants}>
                <div className="verify-detail-icon">
                  <Icon size={20} />
                </div>
                <div className="verify-detail-text">
                  {detail.href ? (
                    <a href={detail.href} className="verify-detail-link">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </div>
              </motion.li>
            );
          })}
        </motion.ul>

        <motion.section
          className="verify-trust"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.5 }}
        >
          {TRUST_BADGES.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.title}
                className="verify-trust-item"
                whileHover={{ y: -4, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <div className="verify-trust-icon">
                  <Icon size={22} />
                </div>
                <div>
                  <strong>{badge.title}</strong>
                  <span>{badge.subtitle}</span>
                </div>
                {index < TRUST_BADGES.length - 1 && (
                  <span className="verify-trust-divider" aria-hidden="true" />
                )}
              </motion.div>
            );
          })}
        </motion.section>

        <div className="verify-tab verify-tab--bottom">
          <Globe size={16} />
          <span>{CERTIFICATE.organization}</span>
        </div>
      </motion.main>
    </div>
  );
}
