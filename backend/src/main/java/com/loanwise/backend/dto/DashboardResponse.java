package com.loanwise.backend.dto;

public class DashboardResponse {

    private long totalUsers;
    private long totalApplications;
    private long approvedApplications;
    private long pendingApplications;
    private long rejectedApplications;

    public DashboardResponse() {
    }

    public DashboardResponse(
            long totalUsers,
            long totalApplications,
            long approvedApplications,
            long pendingApplications,
            long rejectedApplications
    ) {
        this.totalUsers = totalUsers;
        this.totalApplications = totalApplications;
        this.approvedApplications = approvedApplications;
        this.pendingApplications = pendingApplications;
        this.rejectedApplications = rejectedApplications;
    }

    public long getTotalUsers() {
        return totalUsers;
    }

    public void setTotalUsers(long totalUsers) {
        this.totalUsers = totalUsers;
    }

    public long getTotalApplications() {
        return totalApplications;
    }

    public void setTotalApplications(long totalApplications) {
        this.totalApplications = totalApplications;
    }

    public long getApprovedApplications() {
        return approvedApplications;
    }

    public void setApprovedApplications(long approvedApplications) {
        this.approvedApplications = approvedApplications;
    }

    public long getPendingApplications() {
        return pendingApplications;
    }

    public void setPendingApplications(long pendingApplications) {
        this.pendingApplications = pendingApplications;
    }

    public long getRejectedApplications() {
        return rejectedApplications;
    }

    public void setRejectedApplications(long rejectedApplications) {
        this.rejectedApplications = rejectedApplications;
    }
}